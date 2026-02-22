import Timer from "./Timer";
import ThailandFlag from "./ThailandFlag";
import "./index.css";

function App() {
  return (
    <main>
      <h1>ОСТАЛОСЬ ДО ВСТРЕЧИ:</h1>
      <Timer targetDate={"2026-03-10T14:00"} />
      <ThailandFlag />
    </main>
  );
}

export default App;
