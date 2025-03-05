import { useState } from "react";
import "./App.css";
import DarkModeToggle from "./DarkModeToggle";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? "dark-mode" : " light-mode"}`}>
      <h1>Dark Mode Toggle 🌙</h1>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
      <p>Click the button to toggle between light and dark mode.</p>
    </div>
  );
}