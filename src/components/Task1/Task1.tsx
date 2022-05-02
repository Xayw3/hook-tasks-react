import { useEffect, useState } from 'react';
import './task1.scss';

const Task1 = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('render'.toUpperCase());
  });

  useEffect(() => {
    console.log('first render'.toUpperCase());
  }, []);

  useEffect(() => {
    console.log('changing count'.toUpperCase());
  }, [count]);

  useEffect(() => {
    console.log('input change'.toUpperCase());
  }, [inputValue]);

  return (
    <div className="task1-wrapper">
      <button
        className="btn"
        onClick={() => { setCount(count + 1); }}
      >
        +
      </button>
      <p className="counter">
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

export default Task1;
