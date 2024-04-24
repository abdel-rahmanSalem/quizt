import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedUserRoute from "./protectedRoutes/ProtectedUserRoute";
import ProtectedQuizRoute from "./protectedRoutes/ProtectedQuizRoute";
import ProtectedQuestionsRoute from "./protectedRoutes/ProtectedQuestionsRoute";
import "react-toastify/dist/ReactToastify.css";
import Global from "./components/GlobalUser";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/HomePage";
import Username from "./pages/UsernamePage";
import QuizId from "./pages/QuizIdPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/QuizPage";
import Questions from "./pages/QuestionPage";
import SummaryPage from "./pages/SummaryPage";
import { HosterProvider } from "./contexts/HosterContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Global style={"flex-col"}>
              <Home />
            </Global>
          }
        ></Route>
        <Route
          path="/new-user"
          element={
            <Global style={"flex-col"}>
              <Username />
            </Global>
          }
        ></Route>
        <Route
          path="/quiz-id"
          element={
            <Global style={"flex-col"}>
              <ProtectedUserRoute>
                <QuizId />
              </ProtectedUserRoute>
            </Global>
          }
        ></Route>
        <Route
          path="quiz"
          element={
            <Global>
              <ProtectedUserRoute>
                <ProtectedQuizRoute>
                  <Quiz />
                </ProtectedQuizRoute>
              </ProtectedUserRoute>
            </Global>
          }
        ></Route>
        <Route
          path="/quiz/questions"
          element={
            <Global>
              <ProtectedUserRoute>
                <ProtectedQuizRoute>
                  <ProtectedQuestionsRoute>
                    <Questions />
                  </ProtectedQuestionsRoute>
                </ProtectedQuizRoute>
              </ProtectedUserRoute>
            </Global>
          }
        ></Route>
        <Route
          path="/quiz/summary"
          element={
            <Global>
              <ProtectedUserRoute>
                <ProtectedQuizRoute>
                  <SummaryPage />
                </ProtectedQuizRoute>
              </ProtectedUserRoute>
            </Global>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <HosterProvider>
              <Login />
            </HosterProvider>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <Global style={"flex-col"}>
              <Dashboard />
            </Global>
          }
        ></Route>
        <Route
          path="*"
          element={
            <Global>
              <PageNotFound />
            </Global>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
