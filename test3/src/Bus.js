import './App.css';
import React, { useRef } from 'react';
import { RadialGraph } from '@ant-design/graphs';
import topologiesData from './topologies.json'; 
import graphConfig from './GraphConfig';
import './App.css'; 


function Bus() {
    const chartRef = useRef();
  
    const config = {
      ...graphConfig,
      onReady: (graph) => {
        chartRef.current = graph;
      },
    };

    

    return (
        <div className='radial-graph-container'>
      <h2 className='title'>Bus Topology</h2>
      <RadialGraph data={topologiesData.busTopology} {...config} />
      <img style={{width:"40px",height:"40px"}} alt='server' src='https://cdn-icons-png.flaticon.com/512/3208/3208727.png'/>
    </div>
    );
}

export default Bus;