import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

import { useGlobal } from "./GlobalContext";

const UserContext = createContext();

const initialState = {
  username: "",
  isValidUser: false,
  isUser: false,
  user: {},
  userScore: 0,
  userCorrectAnswers: 0,
  ansArray: [],
  correction: [],
  quizStatus: "unKnown",
  quizId: -1,
  quiz: {},
  isQuizEnd: false,
  questionsStatus: "unKnown",
  questions: [],
  questionsIndexor: 0,
  currentAnswer: -1,
  secondsRemaining: -1,
};

function reducer(state, action) {
  switch (action.type) {
    case "validUser":
      return { ...state, isValidUser: true, username: action.payload };
    case "fetchUser/succes":
      return { ...state, isUser: true, user: action.payload };
    case "fetchQuiz":
      return {
        ...state,
        quizStatus: "fetching",
        quizId: action.payload,
      };
    case "fetchQuiz/received":
      return {
        ...state,
        quizStatus: "loaded",
        quiz: action.payload,
        secondsRemaining: Number(action.payload.time * 60),
      };
    case "fetchQuiz/failed":
      return { ...state, quizStatus: "failed", quiz: {} };
    case "fetchQuestions":
      return { ...state, questionsStatus: "fetching" };
    case "fetchQuestions/received":
      return {
        ...state,
        questionsStatus: "Loaded",
        questions: action.payload,
      };
    case "fetchQuestions/failed":
      return {
        ...state,
        questionsStatus: "failed",
        questions: [],
      };
    case "newAnswer":
      return {
        ...state,
        currentAnswer: action.payload,
      };
    case "correctAnswer":
      return {
        ...state,
        userScore: state.userScore + action.payload,
        userCorrectAnswers: state.userCorrectAnswers + 1,
        ansArray: [...state.ansArray , "correct"],
        currentAnswer: -1,
        questionsIndexor: state.questionsIndexor + 1,
      };
    case "wrongAnswer":
      return {
        ...state,
        currentAnswer: -1,
        ansArray: [...state.ansArray , "incorrect"],
        correction: [...state.correction, {answer:action.payload, index: state.questionsIndexor}],
        questionsIndexor: state.questionsIndexor + 1,
      };
    case "correctFinalAnswer":
      return {
        ...state,
        userScore: state.userScore + action.payload,
        userCorrectAnswers: state.userCorrectAnswers + 1,
        ansArray: [...state.ansArray , "correct"],
        currentAnswer: -1,
        questionsIndexor: 0,
        isQuizEnd: true,
      };
    case "wrongFinalAnswer":
      return {
        ...state,
        currentAnswer: -1,
        ansArray: [...state.ansArray , "incorrect"],
        correction: [...state.correction, {answer:action.payload, index: state.questionsIndexor}],
        questionsIndexor: 0,
        isQuizEnd: true,
      };
    case "joinAnotherQuiz":
      return {
        ...initialState,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        isQuizEnd: state.secondsRemaining === 0 ? true : state.isQuizEnd,
      };
  }
}

function UserProvider({ children }) {
  const { quiztServer, notify } = useGlobal();
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    username,
    isValidUser,
    isUser,
    user,
    userScore,
    userCorrectAnswers,
    correction,
    ansArray,
    quizStatus,
    quizId,
    quiz,
    questionsStatus,
    questions,
    questionsIndexor,
    currentAnswer,
    isQuizEnd,
    secondsRemaining,
  } = state;

  const currentQuestion = questions.at(questionsIndexor);

  // handle newusers
  async function submitNewUser(displayName) {
    try {
      // 1. Input Validation
      if (!isValidUsername(displayName)) return;

      // 2. Check if username already exists
      const existingUser = await getUserByUsername(displayName);
      if (existingUser) {
        notify("Username already taken", "top-right", "error");
        return;
      }

      notify("Valid Username", "top-right", "success");

      dispatch({ type: "validUser", payload: displayName });
    } catch (error) {
      notify("Failed to create user", "top-right", "error");
    }
  }

  // Function to validate the username
  function isValidUsername(username) {
    if (username.trim().length > 3) return true;

    if (username.trim().length < 1) {
      notify("You should have a Username :)", "top-right", "error");
      return false;
    }

    notify("Should be more than three characters", "top-right", "warn");
  }

  // Function to get user by username
  async function getUserByUsername(username) {
    const { data, error } = await quiztServer
      .from("users")
      .select()
      .eq("user_name", username);
    if (error) {
      throw error;
    }
    return data ? data[0] : null;
  }

  // fetching the quiz by id
  function checkQuizId(id) {
    if (id.length >= 0 && id.length < 4) {
      notify("Should be more than three characters", "top-right", "warn");
      return;
    }
    dispatch({ type: "fetchQuiz", payload: Number(id) });
  }
  useEffect(() => {
    async function fetchQuiz() {
      if (quizStatus === "fetching") {
        const { data, error } = await quiztServer
          .from("quizzes")
          .select()
          .eq("quiz_id", quizId)
          .single();

        if (error) {
          console.log(error);
          if (error.code === "22P02")
            notify("Should be a number", "top-right", "error");
          if (error.code === "PGRST116")
            notify("Wrong quiz ID", "top-right", "error");
          dispatch({ type: "fetchQuiz/failed" });
        }

        if (data) {
          dispatch({
            type: "fetchQuiz/received",
            payload: data,
          });
          notify("Correct Quiz ID", "top-right", "success");
        }
      }
    }
    if (quizStatus === "fetching") {
      fetchQuiz();
    }
  }, [notify, quizId, quizStatus, quiztServer]);

  useEffect(() => {
    async function createNewUser() {
      // Insert new user into the database
      if (quizStatus === "loaded") {
        const { data, error } = await quiztServer
          .from("users")
          .insert([
            {
              user_name: username,
              quiz_id: quizId,
            },
          ])
          .select()
          .single();

        if (error) {
          throw error;
        }
        if (data) {
          dispatch({ type: "fetchUser/succes", payload: data });
        }
      }
    }
    if (quizStatus === "loaded") {
      createNewUser();
    }
  }, [quizId, quizStatus, quiztServer, username]);

  //fetching the questions
  function handleUserStartQuiz() {
    dispatch({ type: "fetchQuestions" });
  }
  useEffect(() => {
    async function fetchQuestions() {
      if (questionsStatus === "fetching") {
        const { data, error } = await quiztServer
          .from("questions")
          .select()
          .eq("quiz_id", quizId);

        if (error) {
          const message = "Unexpected error occurred";
          dispatch({ type: "fetchQuestions/failed" });
          notify(message, "top-right", "error");
        }

        if (data) {
          dispatch({
            type: "fetchQuestions/received",
            payload: data,
          });
          notify("Quiz Start", "top-right", "info");
        }
      }
    }
    fetchQuestions();
  }, [notify, questionsStatus, quizId, quiztServer]);

  function tick() {
    dispatch({ type: "tick" });
  }

  // handle answering the question
  function handleNewAnswer(optionIndex) {
    dispatch({ type: "newAnswer", payload: optionIndex });
  }

  function handleNextQuestion() {
    if (currentAnswer === -1) {
      notify("Answer the Question Please :)", "top-right", "warn");
      return;
    }

    if (questionsIndexor === questions.length - 1) {
      if (currentAnswer === currentQuestion.correct_option) {
        dispatch({
          type: "correctFinalAnswer",
          payload: currentQuestion.points,
        });
        return;
      } else {
        dispatch({ type: "wrongFinalAnswer", payload: currentQuestion.options[currentQuestion.correct_option] });
        return;
      }
    }

    if (currentAnswer === currentQuestion.correct_option)
      dispatch({ type: "correctAnswer", payload: currentQuestion.points });
    else dispatch({ type: "wrongAnswer", payload: currentQuestion.options[currentQuestion.correct_option] });
  }

  // update cloud user score
  useEffect(() => {
    async function updateUserScore() {
      const { data, error } = await quiztServer
        .from("users")
        .update({ score: userScore, num_correct_questions: userCorrectAnswers })
        .eq("user_name", username)
        .select();

      if (error) {
        throw error;
      }
      if (data) {
        dispatch({ type: "fetchUser/succes", payload: data[0] });
      }
    }
    updateUserScore();
  }, [quiztServer, userScore, username, userCorrectAnswers]);

  function handleAttemptAnotherQuiz() {
    dispatch({ type: "joinAnotherQuiz" });
  }

  return (
    <UserContext.Provider
      value={{
        isValidUser,
        isUser,
        user,
        userScore,
        ansArray,
        correction,
        username,
        quizId,
        quizStatus,
        quiz,
        questionsStatus,
        questions,
        questionsIndexor,
        currentQuestion,
        currentAnswer,
        isQuizEnd,
        notify,
        secondsRemaining,
        submitNewUser,
        checkQuizId,
        tick,
        handleUserStartQuiz,
        handleNewAnswer,
        handleNextQuestion,
        handleAttemptAnotherQuiz,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UserContext was used outside of the QuizProvider");
  return context;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export { UserProvider, useUser };
