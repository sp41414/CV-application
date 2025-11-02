import "./styles/App.css";
import CV from "./components/CV";
import InputForm from "./components/InputForm";

function App() {
  return (
    <>
      <header>
        <h1>CV Maker</h1>
      </header>
      <main>
        <InputForm />
        <CV />
      </main>
    </>
  );
}

export default App;
