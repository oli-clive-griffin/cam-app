import './App.css';
import WC from 'react-webcam'
import { useCallback, useRef, useState } from 'react';

function App() {
  const [src, setSrc] = useState();

  const webcamRef = useRef(null);
  
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSrc(imageSrc);
  }, [webcamRef]);

  return (
    <div className="App">
      <header className="App-header">
        <WC
          reversed
          videoConstraints={{
            facingMode: { exact: "environment" }
          }}
          screenshotFormat="image/jpeg"
        />
        <button onClick={capture}>take photo</button>
        <h1>camera? ^</h1>
        <p>{`${src}`}</p>
      </header>
    </div>
  );
}

export default App;
