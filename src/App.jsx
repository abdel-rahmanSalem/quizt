import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedUserRoute from "./protectedRoutes/ProtectedUserRoute";
import "react-toastify/dist/ReactToastify.css";
import GlobalUserUI from "./components/GlobalUserUI";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/HomePage";
import Username from "./pages/UsernamePage";
import QuizId from "./pages/QuizIdPage";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/QuizPage";
import Questions from "./pages/QuestionPage";
import SummaryPage from "./pages/SummaryPage";
import ProtectedQuizRoute from "./protectedRoutes/ProtectedQuizRoute";
import Leaderboard from "./pages/Leaderboard";
import { AuthProvider } from "./contexts/authContext";
import { UserProvider } from "./contexts/UserContext";
import { GlobalProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <UserProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/quiz-id"
                element={
                  <GlobalUserUI style={"flex-col"}>
                    <QuizId />
                  </GlobalUserUI>
                }
              ></Route>
              <Route
                path="/new-user"
                element={
                  <GlobalUserUI style={"flex-col"}>
                    <ProtectedQuizRoute>
                      <Username />
                    </ProtectedQuizRoute>
                  </GlobalUserUI>
                }
              ></Route>
              <Route
                path="quiz"
                element={
                  <GlobalUserUI>
                    <ProtectedUserRoute>
                      <Quiz />
                    </ProtectedUserRoute>
                  </GlobalUserUI>
                }
              ></Route>
              <Route
                path="/quiz/questions"
                element={
                  <GlobalUserUI>
                    <ProtectedUserRoute>
                      <Questions />
                    </ProtectedUserRoute>
                  </GlobalUserUI>
                }
              ></Route>
              <Route
                path="/quiz/summary"
                element={
                  <GlobalUserUI>
                    <ProtectedUserRoute>
                      <SummaryPage />
                    </ProtectedUserRoute>
                  </GlobalUserUI>
                }
              ></Route>
              <Route path="/sign-in" element={<Signin />}></Route>
              <Route
                path="/dashboard"
                element={
                  <GlobalUserUI style={"flex-col"}>
                    <Dashboard />
                  </GlobalUserUI>
                }
              ></Route>
              <Route
                path="*"
                element={
                  <GlobalUserUI>
                    <PageNotFound />
                  </GlobalUserUI>
                }
              />
              <Route
                path="/leaderboard"
                element={
                  <GlobalUserUI>
                    <Leaderboard />
                  </GlobalUserUI>
                }
              />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </UserProvider>
    </GlobalProvider>
  );
}

export default App;
