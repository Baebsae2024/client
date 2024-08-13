import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Layout from './components/layout/Layout';
import WarningsPage from './pages/WarningsPage';
import WarningDetailPage from './pages/WarningDetailPage';
import DocumentsPage from './pages/DocumentsPage';
import SupportPage from './pages/SupportPage';
import SupportResultPage from './pages/SupportResultPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/warnings" element={<WarningsPage />} />
          <Route path="/warnings/:id" element={<WarningDetailPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/support/result" element={<SupportResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
