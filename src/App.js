import React from 'react';
import logo from './logo.svg';
import './App.css';
import { initReactI18next, Trans } from "react-i18next";
import i18next from "i18next";
import translations from "./translations/en-US/translation.json";

i18next
  .use(initReactI18next)
  .init({
    resources: {},
    lng: "nl",
    keySeparator: false,
    nsSeparator: false,
    interpolation: {
      escapeValue: false
    }
  });
i18next.addResourceBundle("en-US", "translation", translations);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Trans i18nKey="hello">
          Hello <h1>world</h1> it is I!
        </Trans>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
