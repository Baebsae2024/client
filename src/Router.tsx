import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Layout from './components/layout/Layout';
import LearningPage from './pages/LearningPage';
import QuizPage from './pages/QuizPage';
import CommunityPage from './pages/CommunityPage';
import TodolistPage from './pages/TodolistPage';

const Router = () => {
  // const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  //   const accessToken = localStorage.getItem('accessToken');

  //   return accessToken ? element : <Navigate to="/login" replace />;
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<ProtectedRoute element={<MainPage />} />} />*/}
          <Route path="/" element={<MainPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/todolist" element={<TodolistPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
