import { useEffect, useState } from 'react';
import './App.css';
import { HistoryPage } from './pages/HistoryPage/HistoryPage';

function App() {
  const LOCAL_STORAGE_KEY = 'history';
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedHistory ? JSON.parse(savedHistory) : []
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  return (
    <>
      <HistoryPage items={history} />
    </>
  );
}

export default App;
