import React, { useEffect, useRef } from 'react';
import { Network, DataSet } from 'vis-network/standalone/umd/vis-network.min';
import './NetworkGraph.css';


function createNodes(nNodes){

  let nodesArr = [];

  for(let i = 0; i < nNodes; i++)
    nodesArr.push({id: i, label: `Node ${i}`, color: "#ADD8E6"});

  return new DataSet(nodesArr);

}

function createCyclicEdges(nEdges){

  let edgesArr = [];

  for(let i = 0; i < nEdges; i++)
    edgesArr.push({from: i, to: i + 1});

  edgesArr.push({from: nEdges - 1, to: 0});
  return new DataSet(edgesArr);
}

const NetworkGraph = () => {
  const networkContainer = useRef(null);

  useEffect(() => {
    const nodes = createNodes(5);

    const edges = createCyclicEdges(5);

    const data = { nodes, edges };
    const options = {
      nodes: {
        shape: 'circle',
        size: 16,
        font: {
          size: 16,
          color: '#FFFFFF',
        },
        borderWidth: 2,
        shadow: true,
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

  return <div id="mynetwork" ref={networkContainer} style={{ width: '600px', height: '400px' }}></div>;
};

export default NetworkGraph;
