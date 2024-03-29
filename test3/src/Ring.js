import './App.css';
import React, { useRef } from 'react';
import { RadialGraph } from '@ant-design/graphs';
import topologiesData from './topologies.json'; 
import graphConfig from './GraphConfig';
import './App.css'; 


function Ring() {
    const chartRef = useRef();
  
    const config = {
      ...graphConfig, 
      onReady: (graph) => {
        chartRef.current = graph;
      },
    };

    return (
        <div className='radial-graph-container'>
      <h2 className='title'>Ring Topology</h2>
      <RadialGraph data={topologiesData.ringTopology} {...config} />
    </div>
    );
}

export default Ring;