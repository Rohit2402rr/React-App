export default function DarkModeToggle({ darkMode, setDarkMode}) {
  return (
    <button className="toggle-button" onClick={() => setDarkMode (!darkMode)}>
      {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
  );
}