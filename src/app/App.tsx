import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GeneratorPage } from '../pages/GeneratorPage';
import { AnalyticsPage } from '../pages/AnalyticsPage';
import { HistoryPage } from '../pages/HistoryPage';
import { Header } from '../components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AnalyticsPage />} />
        <Route path="/generate" element={<GeneratorPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
