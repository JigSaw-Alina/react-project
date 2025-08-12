import type { ChangeEvent } from 'react';
import { useState } from 'react';

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState<boolean>(false);

  const handleColor = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setColor(value);

    const isValid = CSS.supports('color', value);
    setError(!isValid);
  };

  return (
    <div className="App">
      <h1 className="title">🎨 Dynamic Color Picker</h1>
      <>
        <input
          className="input"
          type="text"
          value={color}
          onChange={handleColor}
          placeholder="Add color here!"
        />
      </>
      {error ? (
        <p>❌ Invalid color</p>
      ) : (
        <div className="box-color" style={{ background: color }}>
          {color.toLocaleUpperCase()}
        </div>
      )}
    </div>
  );
};

export default App;
