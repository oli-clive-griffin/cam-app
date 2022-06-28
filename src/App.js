import logo from './logo.svg';
import './App.css';
import WC from 'react-webcam'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WC />
        <h1>camera? ^</h1>
      </header>
    </div>
  );
}

export default App;
