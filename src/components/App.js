// App.js

import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Input value={inputValue} onChange={handleInputChange} />
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default App;