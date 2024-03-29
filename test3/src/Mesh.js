import './App.css';
import React, { useRef } from 'react';
import { RadialGraph } from '@ant-design/graphs';
import topologiesData from './topologies.json'; 
import graphConfig from './GraphConfig';
import './App.css'; 


function Mesh() {
    const chartRef = useRef();
  
    const config = {
      ...graphConfig, // Spread the properties of the imported config
      onReady: (graph) => {
        chartRef.current = graph;
      },
    };

    return (
        <div className='radial-graph-container'>
      <h2 className='title'>Mesh Topology</h2>
      <RadialGraph data={topologiesData.mesh} {...config} />
    </div>
    );
}

export default Mesh;