import Timer from "./Timer";
import ThailandFlag from "./ThailandFlag";

function App() {
  return (
    <div>
      <h1>ОСТАЛОСЬ ДО ВСТРЕЧИ:</h1>
      <Timer targetDate={"2026-03-10T14:00"} />
      <ThailandFlag />
    </div>
  );
}

export default App;
