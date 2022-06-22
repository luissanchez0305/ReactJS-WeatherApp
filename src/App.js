
import React, { useContext, useState } from 'react';
import './App.css';
import { Dropdown } from './components/Dropdown';
import { Header } from './components/Header';
import LanguageContext from './context/LanguageContext';

function App() {
  const [language, setLanguage] = useState('en')
  function es() {
    setLanguage('es')
  }
  function en() {
    setLanguage('en')
  }
  return (
    <div>
      <React.Fragment>
        <LanguageContext.Provider value={{language: language, en: en, es: es}}>
          <Header/>
          <Dropdown/>
        </LanguageContext.Provider>
      </React.Fragment>
    </div>
  );
}

export default App;
