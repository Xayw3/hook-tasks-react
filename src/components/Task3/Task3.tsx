import { useEffect, useRef, useState } from 'react';
import './task3.scss';

const Task3 = () => {
  const [inputValue, setInputValue] = useState('');
  const [text, setText] = useState<string[]>([]);
  const [disable, setDisable] = useState(true);
  const [count, setCount] = useState(1);
  const [countDouble, setCountDouble] = useState(count);
  const [color, setColor] = useState('color dropdown');

  const inputRef = useRef<HTMLInputElement | null>(null);
  const submitRef = useRef<HTMLInputElement | null>(null);
  const boxWrapper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDisable(false);
    }, 5000);
  }, [disable]);

  useEffect(() => {
    setCountDouble(count * 2);
  }, [count]);

  const colors = ['color dropdown', 'green', 'blue', 'yellow', 'pink'];
  const getColor = colors.map((value) => <option key={Math.random()}>{value}</option>);

  return (
    <div className="task3-wrapper">
      <input
        type="text"
        className="input"
        ref={inputRef}
        placeholder="Write text"
      />
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="input"
          placeholder="Write text"
          ref={submitRef}
          value={inputValue}
          onChange={(el) => { setInputValue(el.target.value); }}
        />
        <button
          className="btn"
          type="submit"
          onClick={() => {
            setText([...text, inputValue]);
            setInputValue('');
            submitRef.current?.focus();
          }}
        >
          submit
        </button>
        <ul className="list">
          {
                text.map((el) => (
                  <li className="list__item">{el}</li>
                ))
            }
        </ul>
      </form>
      <button disabled={disable} className="btn">button</button>
      <div className="btn-wrapper">
        <button
          className="btn"
          onClick={() => { setCount(count + 1); }}
        >
          {`count: ${count}`}
        </button>
        <div className="count-box">{countDouble}</div>
      </div>
      <div className="select-wrapper">
        <button
          className="btn"
          onClick={() => {
            if (boxWrapper.current) {
              const boxWrapperNode = boxWrapper.current;
              const newBox = document.createElement('div');
              newBox.classList.add('box');
              newBox.classList.add(`box--${color}`);
              boxWrapperNode.appendChild(newBox);
            }
          }}
        >
          +
        </button>
        <select
          className="select-color btn"
          onChange={(el) => {
            setColor(el.target.value);
          }}
        >
          {getColor}
        </select>
      </div>
      <div className="colors-wrapper">
        <div ref={boxWrapper} className="box-wrapper">
          {}
        </div>
      </div>
    </div>
  );
};

export default Task3;
