// src/components/NetworkGraph.js
import React, { useEffect, useRef } from 'react';
import { Network, DataSet } from 'vis-network/standalone/umd/vis-network.min';
import './NetworkGraph.css';

const NetworkGraph = () => {
  const networkContainer = useRef(null);

  useEffect(() => {
    const nodes = new DataSet([
      { id: 1, label: 'Node 1', color: '#FF5733', },
      { id: 2, label: 'Node 2', color: '#33FF57', },
      { id: 3, label: 'Node 3', color: '#3357FF', },
      { id: 4, label: 'Node 4', color: '#F1C40F', },
      { id: 5, label: 'Node 5', color: '#9B59B6', },
    ]);

    const edges = new DataSet([
      { from: 1, to: 3, width: 2 },
      { from: 1, to: 2, width: 2 },
      { from: 2, to: 4, width: 2 },
      { from: 2, to: 5, width: 2 },
    ]);

    const data = { nodes, edges };
    const options = {
      nodes: {
        borderWidth: 2,
        shadow: true,
        font: { size: 16, color: '#FFFFFF' },
        shape: 'dot', size: 16,
      },
      edges: {
        color: {
          color: '#848484',
          highlight: '#848484',
          hover: '#848484',
        },
        width: 2,
        smooth: {
          type: 'continuous'
        },
      },
      interaction: {
        hover: true,
      },
      physics: {
        enabled: true,
        barnesHut: {
          gravitationalConstant: -2000,
          centralGravity: 0.3,
          springLength: 95,
          springConstant: 0.04,
          damping: 0.09,
        },
        stabilization: {
          iterations: 2500,
        },
      },
    };

    const network = new Network(networkContainer.current, data, options);
  }, []);

  return <div id="mynetwork" ref={networkContainer}></div>;
};

export default NetworkGraph;
