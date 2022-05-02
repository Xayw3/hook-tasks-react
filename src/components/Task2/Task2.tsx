import { useEffect, useState } from 'react';
import './task2.scss';

const Task2 = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [size, setSize] = useState(20);

  useEffect(() => {
    setCount(100);
  }, []);

  useEffect(() => {
    setSize(size + 1);
  }, [count]);

  useEffect(() => {
    document.title = inputValue;
  }, [inputValue]);

  return (
    <div className="task1-wrapper">
      <button
        className="btn"
        onClick={() => { setCount(count + 1); }}
      >
        +
      </button>
      <p className="counter" style={{ fontSize: size }}>
        {`count: ${count}`}
      </p>
      <input
        type="text"
        className="input"
        placeholder="Write text"
        value={inputValue}
        onChange={(el) => { setInputValue(el.target.value); }}
      />
      <p>{inputValue}</p>
    </div>
  );
};

export default Task2;
