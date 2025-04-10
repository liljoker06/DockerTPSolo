import { useEffect, useState } from 'react';
import { getRandomQuote } from './services/api/quotes';
import './index.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AutorenewIcon from '@mui/icons-material/Autorenew';

function App() {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const randomQuote = await getRandomQuote();
      setQuote(randomQuote);
    } catch (error) {
      console.error("Erreur lors du chargement de la citation :", error);
      setQuote("Erreur lors du chargement de la citation.");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
      <h1 className="text-4xl font-bold mb-6 flex items-center gap-2">
        <FormatQuoteIcon fontSize="large" /> Citation du jour
      </h1>
      <blockquote className="italic text-xl bg-white p-6 rounded shadow-md max-w-xl text-center mb-4">
        {quote || "Chargement..."}
      </blockquote>
      <button
        onClick={fetchQuote}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        <AutorenewIcon /> Nouvelle citation
      </button>
    </div>
  );
}

export default App;
