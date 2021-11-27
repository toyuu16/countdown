import './App.css';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="h1text">クリスマスまで....あと</h1>
        <div className="countdownApp">
          <CountdownTimer
          countdownTimestampMs={1640444399000}
          />
        </div>
    </div>
  );
}

export default App;
