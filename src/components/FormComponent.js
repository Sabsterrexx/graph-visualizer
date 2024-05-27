import React, { useState } from 'react';
import './FormComponent.css';
import './NetworkGraph.js';

function FormComponent() {
  const [nodes, setNodes] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The nodes you entered was: ${nodes}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter the number of Nodes:</label>
      <br/>
      <input
        type="text"
        value={nodes}
        onChange={(e) => setNodes(e.target.value)}
      />
      <br/>
      <input type="submit" value="Generate" />
    </form>
  )
}

export default FormComponent;
