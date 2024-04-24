import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

import { useGlobal } from "./GlobalContext";

const UserContext = createContext();

const initialState = {
  status: "unKnown",
  username: "",
  isUser: false,
  user: {},
  userScore: 0,
  quizId: -1,
  quiz: {},
  isQuizEnd: false,
  questions: [],
  questionsIndexor: 0,
  currentAnswer: -1,
  secondsRemaining: -1,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        status: "loading",
      };
    case "fetchQuiz/received":
      return {
        ...state,
        status: "quizLoaded",
        quiz: action.payload.quiz,
        quizId: action.payload.quizId,
        secondsRemaining: Number(action.payload.time * 60),
      };
    case "fetchQuiz/failed":
      return {
        ...state,
        status: "quizFailed",
        quiz: {},
      };
    case "insertUser/succes":
      return {
        ...state,
        status: "userLoaded",
        isUser: true,
        user: action.payload.user,
        username: action.payload.username,
      };
    case "insertUser/failed":
      return {
        ...state,
        status: "userfailed",
        user: {},
      };
    case "fetchQuestions/received":
      return {
        ...state,
        status: "questionsLoaded",
        questions: action.payload,
      };
    case "fetchQuestions/failed":
      return {
        ...state,
        status: "questionsFailed",
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
        currentAnswer: -1,
        questionsIndexor: state.questionsIndexor + 1,
      };
    case "wrongAnswer":
      return {
        ...state,
        currentAnswer: -1,
        questionsIndexor: state.questionsIndexor + 1,
      };
    case "correctFinalAnswer":
      return {
        ...state,
        userScore: state.userScore + action.payload,
        currentAnswer: -1,
        questionsIndexor: 0,
        isQuizEnd: true,
      };
    case "wrongFinalAnswer":
      return {
        ...state,
        currentAnswer: -1,
        questionsIndexor: 0,
        isQuizEnd: true,
      };
    case "updateUser/succes":
      return { ...state, user: action.payload };
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
    status,
    username,
    isUser,
    user,
    userScore,
    quizId,
    quiz,
    questions,
    questionsIndexor,
    currentAnswer,
    isQuizEnd,
    secondsRemaining,
  } = state;

  const currentQuestion = questions.at(questionsIndexor);

  // fetching the quiz by id
  async function checkQuizId(id) {
    if (id.trim().length < 4) {
      notify("Should be more than three characters", "top-right", "warn");
      return;
    }
    dispatch({ type: "loading" });
    const { data, error } = await quiztServer
      .from("quizzes")
      .select()
      .eq("quiz_id", id)
      .single();

    if (error) {
      if (error.code === "22P02")
        notify("Should be a number", "top-right", "error");
      if (error.code === "PGRST116")
        notify("Wrong quiz ID", "top-right", "error");
      dispatch({ type: "fetchQuiz/failed" });
    }

    if (data) {
      dispatch({
        type: "fetchQuiz/received",
        payload: { quiz: data, quizId: id },
      });
      notify("Correct Quiz ID", "top-right", "success");
    }
  }
  // handle newusers
  async function submitNewUser(displayName) {
    // 1. Input Validation
    if (!isValidUsername(displayName)) return;

    // 2. Check if username already exists
    const existingUser = await checkIfExistingUser(displayName);
    if (existingUser) {
      notify("Username already taken", "top-right", "error");
      return;
    }

    dispatch({ type: "loading" });

    // 3. Insert new user into the database
    const { data, error } = await quiztServer
      .from("users")
      .insert([
        {
          user_name: displayName,
          quiz_id: quizId,
        },
      ])
      .select()
      .single();

    if (error) {
      dispatch({ type: "insertUser/failed" });
    }
    if (data) {
      dispatch({
        type: "insertUser/succes",
        payload: { user: data, username: displayName },
      });
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

  // Function to get users by quiz id then check if the username is taken
  async function checkIfExistingUser(username) {
    const { data, error } = await quiztServer
      .from("users")
      .select()
      .match({ quiz_id: quizId, user_name: username });
    if (error) {
      throw error;
    }
    // return data ? data[0] : null;
    if (data) {
      if (data.length === 1) return true;
      if (data.length === 0) return false;
    }
  }

  //fetching the questions
  async function handleUserStartQuiz() {
    dispatch({ type: "loading" });

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

  function tick() {
    dispatch({ type: "tick" });
  }

  // handle answering the question
  function handleNewAnswer(optionIndex) {
    dispatch({ type: "newAnswer", payload: optionIndex });
  }

  // update cloud user score
  async function updateUserScore() {
    const { data, error } = await quiztServer
      .from("users")
      .update({ score: state.userScore })
      .eq("user_name", username)
      .select()
      .single();

    if (error) {
      throw error;
    }
    if (data) {
      dispatch({ type: "updateUser/succes", payload: data });
    }
  }

  async function handleNextQuestion() {
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
        dispatch({ type: "wrongFinalAnswer" });
        return;
      }
    }

    if (currentAnswer === currentQuestion.correct_option)
      dispatch({ type: "correctAnswer", payload: currentQuestion.points });
    else dispatch({ type: "wrongAnswer" });
  }

  function handleAttemptAnotherQuiz() {
    dispatch({ type: "joinAnotherQuiz" });
  }

  return (
    <UserContext.Provider
      value={{
        status,
        isUser,
        user,
        userScore,
        username,
        quizId,
        quiz,
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
        updateUserScore,
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
