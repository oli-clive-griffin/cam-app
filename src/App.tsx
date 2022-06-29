import './App.css';
import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import InputScreen from './components/input-screen';
import { createContext, useState } from 'react';
import ResultScreen from './components/result-screen';

// export type CoverContext = { cover: number | null, setCover };
// const Context = createContext<CoverContext>({ cover: null });

function App() {
  const [cover, setCover] = useState<number | null>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputScreen onChangeCover={(c: number) => setCover(c)}/>} />
        <Route path="/result" element={<ResultScreen cover={cover} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
