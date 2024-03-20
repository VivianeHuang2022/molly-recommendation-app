import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecommendationForm from './components/RecommendationForm/RecommendationForm';
import DownloadPage from './components/DownloadPage/DownloadPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecommendationForm />} />
        <Route path="/DownloadPage" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}

export default App;