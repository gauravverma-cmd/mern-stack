import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  useEffect(() => {
    const colorSwitcher = document.querySelector("[data-theme-color-switch]");
    let currentTheme = "light";

    const toggleTheme = () => {
      const root = document.documentElement;

      if (currentTheme === "dark") {
        root.style.setProperty("--bg-color", "#fff");
        root.style.setProperty("--text-color", "#000");
        colorSwitcher.textContent = "🌙";
        currentTheme = "light";
      } else {
        root.style.setProperty("--bg-color", "#050505");
        root.style.setProperty("--text-color", "#fff");
        colorSwitcher.textContent = "☀️";
        currentTheme = "dark";
      }
    };

    colorSwitcher.addEventListener("click", toggleTheme);

    return () => {
      colorSwitcher.removeEventListener("click", toggleTheme);
    };
  }, []);

  return (
    <main className="error-page">
      <div className="container">
        <div className="eyes">
          <div className="eye">
            <div className="eye__pupil"></div>
          </div>
          <div className="eye">
            <div className="eye__pupil"></div>
          </div>
        </div>

        <div className="error-page__heading">
          <h1 className="error-page__heading-title">
            Looks like you're lost
          </h1>
          <p className="error-page__heading-desciption mt-15">404 error</p>
        </div>

        <Link className="error-page__button" to="/">
          back to home
        </Link>
      </div>

      <button
        className="color-switcher"
        data-theme-color-switch
        aria-label="theme switcher"
      >
        🌙
      </button>
    </main>
  );
};

export default NotFound;
