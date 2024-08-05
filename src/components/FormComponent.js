import React, { useState } from 'react';
import './FormComponent.css';

const FormComponent = ({ setNumNodes }) => {
  const [inputValue, setInputValue] = useState(5); // Initial value

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumNodes(parseInt(inputValue, 10));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number of Nodes:
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          min="1"
        />
      </label>
      <button type="submit">Update Graph</button>
    </form>
  );
};

export default FormComponent;
