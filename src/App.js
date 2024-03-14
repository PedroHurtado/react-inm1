import Array from "./array/Array";
import Calendar from "./calendar/Calendar";
import User from "./user/user";

function App() {
  const name = "Pedro"
  return (
    <>
      <User/>
      <Calendar/>
      <Array />
      <div>Hello {name}</div>
    </>
  );
}

export default App;
