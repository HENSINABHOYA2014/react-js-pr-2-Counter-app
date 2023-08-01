import logo from './logo.svg';
import './App.css';
import './Counter.css';
import { useEffect, useState } from 'react';

function App() {
  const [no, setNo] = useState(0);

  const cntplus = () => {
    setNo(no + 1);
  };

  const cntminus = () => {
    if (no > 0) {
      setNo(no - 1);
    }
  };
  const reset = () => {
    setNo(0);
  };
  return (
    <>
      <section>
        <div className="center">
          <h1>click counter</h1>
          <input type="number" value={no}/>
          <div className="buttons">
            <button className="sub" onClick={cntplus}>
              +
            </button>
            <button className="reset" onClick={reset}>
              reset
            </button>
            <button className="add" onClick={cntminus}>
              -
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
