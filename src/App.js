import React, { useState } from 'react';
import NetworkGraph from './components/NetworkGraph.js';
import FormComponent from './components/FormComponent.js';
import WolframComponent from './components/WolframComponent.js';

const App = () => {
  const [numNodes, setNumNodes] = useState(5); // Initial number of nodes

  return (
    <div>
      <FormComponent setNumNodes={setNumNodes} />
      <NetworkGraph numNodes={numNodes} />
      <WolframComponent numNodes={numNodes}/>
    </div>
  );
};

export default App;
