import './App.css';
import WC from 'react-webcam'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <WC
          reversed
          videoConstraints={{
            facingMode: { exact: "environment" }
          }}
        />
        <h1>camera? ^</h1>
      </header>
    </div>
  );
}

export default App;
