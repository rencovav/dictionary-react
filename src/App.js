import "./App.css";
import Dictionary from "./Dictionary";
import "./Dictionary.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Dictionary defaultKeyword="dictionary" />
      <footer>
        Coded by Vlasta Řenčová, see the code on{" "}
        <a href="https://github.com/rencovav/dictionary-react">Git Hub</a>
      </footer>
    </div>
  );
}
