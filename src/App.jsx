import React, { useState } from 'react';
import './index.css';
import { Header } from './Components/Header';
import { Keyboard } from './Components/Keyboard';
import { SearchCard } from './Components/SearchCard';

function App() {
  const [searchResult, setSearchResult] = useState(null);
  const [isDarkMode, setDarkMode] = useState(false);

  const handleSearch = async (word) => {
    if (word.trim() === '') return;

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
      setSearchResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setSearchResult(null);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "bg-zinc-950" : "bg-white"} w-full h-full pb-5 bg-white`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Keyboard isDarkMode={isDarkMode} onSearch={handleSearch} />
      <SearchCard isDarkMode={isDarkMode} searchResult={searchResult} />
    </div>
  )
}

export default App;