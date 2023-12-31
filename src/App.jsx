import React, { useState } from 'react';
import './index.css';
import { Header } from './Components/Header';
import { Keyboard } from './Components/Keyboard';
import { SearchCard } from './Components/SearchCard';
import { Headings } from './Components/Headings';

function App() {
  const [searchResult, setSearchResult] = useState(null);
  const [isDarkMode, setDarkMode] = useState(false);
  const [selectedFont, setSelectedFont] = useState('sans-serif'); // Default font

  const handleSearch = async (word) => {
    if (word.trim() === '') return;

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
      setSearchResult(data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
      setSearchResult(null);
    }
  };

  console.log(searchResult);

  const heading = () => {
    const audio = searchResult?.phonetics.find(phone => phone.audio !== "").audio;
    return {
      audioUrl: audio,
      word: searchResult?.word,
      phonetic: searchResult?.phonetic,
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  return (
    <div className={`App ${isDarkMode ? "bg-zinc-950" : "bg-white"} w-full h-full pb-5 bg-white`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} selectedFont={selectedFont} onFontChange={handleFontChange} />
      <Keyboard isDarkMode={isDarkMode} onSearch={handleSearch} />
      {
        searchResult?.meanings?.length > 0 &&
        <>
          <Headings isDarkMode={isDarkMode} selectedFont={selectedFont} {...heading()} />
          {searchResult.meanings.map((content, index) => {
            return <SearchCard key={index} isDarkMode={isDarkMode} selectedFont={selectedFont} {...content} />;
          })}
        </>
      }
    </div>
  )
}

export default App;