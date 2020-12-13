import "./App.css";

import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/MaryRapa/react_app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Mary Rapa
        </footer>
      </div>
    </div>
  );
}
