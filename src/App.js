import Array from "./array/Array";
import ArrayState from "./arraystate/ArrayState";
import Calendar from "./calendar/Calendar";
import Counter from "./counter/Counter";
import Timer from "./timer/Timer";
import User from "./user/user";

function App() {
  const name = "Pedro"
  return (
    <>
      <Timer/>
      <ArrayState/>
      <Counter/>
      <User/>
      <Calendar/>
      <Array />
      <div>Hello {name}</div>
    </>
  );
}

export default App;
