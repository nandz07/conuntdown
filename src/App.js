// import Countdown from "./Countdown";
import Timer from "./num2/Timer";


function App() {
  return (
    <div className="App">
      {/* <Countdown /> */}
      <Timer duration={2*24*60*60*1000}/>
    </div>
  );
}

export default App;
