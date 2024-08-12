import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Layout from './components/layout/Layout';
import LearningPage from './pages/LearningPage';
import QuizPage from './pages/QuizPage';
import CommunityPage from './pages/CommunityPage';
import TodolistPage from './pages/TodolistPage';
import LearningNewPage from './pages/LearningNewPage';
import LearningNewDetailPage from './pages/LearningNewDetailPage';
import LearningMyPage from './pages/LearningMyPage';
import LearningMyDetailPage from './pages/LearningMyDetailPage';
import LoginPage from './pages/LoginPage';
import CommunityDetailPage from './pages/CommunityDetailPage';
import CommunityWritePage from './pages/CommunityWritePage';

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/learning/new" element={<LearningNewPage />} />
          <Route path="/learning/new/:id" element={<LearningNewDetailPage />} />
          <Route path="/learning/my" element={<LearningMyPage />} />
          <Route path="/learning/my/:id" element={<LearningMyDetailPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/:id" element={<CommunityDetailPage />} />
          <Route path="/community/write" element={<CommunityWritePage />} />
          <Route path="/todolist" element={<TodolistPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
