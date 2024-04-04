import React, { useRef, useState, useEffect } from 'react';
import { RadialGraph } from '@ant-design/graphs';
import axios from 'axios';
import pin from './assets/oie_8R6P0yGgouRw.png';

function Hierarchical() {
  const chartRef = useRef();
  const [selectedLabel, setSelectedLabel] = useState('');
  const [initialGraphData, setInitialGraphData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hierarchical');
        console.log('Response from backend:', response.data);
        setInitialGraphData(response.data);
      } catch (error) {
        console.error('Error fetching hierarchical data:', error);
      }
    };
    fetchData();
  }, []);

  // console.log('Initial Graph Data:', initialGraphData[0].nodes);
  if (!initialGraphData || !initialGraphData[0] || !initialGraphData[0]) {
    return <div>Loading...</div>;
  }

  const uniqueLabels = [...new Set(initialGraphData[0].nodes.map(node => node.label))];

  const handleChangeLabel = (e) => {
    setSelectedLabel(e.target.value);
  };

  const filteredNodes = initialGraphData[0].nodes.filter(node => {
    if (selectedLabel) {
      return node.label === selectedLabel;
    }
    return true; // Render all nodes if no label is selected
  });

  const filteredEdges = initialGraphData[0].edges.filter(edge =>
    filteredNodes.some(node => node.id === edge.source) &&
    filteredNodes.some(node => node.id === edge.target)
  );
  const config = {
    type: 'fixed',
    autoFit: true,
    width: 1450,
    height: 700,
    layout: {
      type: 'dagre',
      rankdir: 'TB',
      // align: 'UL',
      nodesep: 150,
      ranksep: 170,
      controlPoints: false,
      
    },
    fitview: 'false',
    nodeCfg: {
      type: 'image',
      img: pin,
      size: 380,
      style: {
        fill: '#6CE8DC',
        stroke: '#6CE8DC',
      },
      labelCfg: {
        style: {
          fontSize: 195,
          fill: '#000',
        },
         // Adjust label position if needed
            formatter: (text, item) => {
                return item.getModel().value; // Display the 'value' attribute of the node
            },
      },
    },
    edgeCfg: {
      style: {
        lineWidth: 11,
        
        stroke:'#3B444C'
      },
      endArrow: {
        d: 10,
        size: 2,
      },
    },
    behaviors: ['drag-canvas', 'drag-node','zoom-canvas'],
    onReady: (graph) => {
      chartRef.current = graph;
    },
  };

  

  return (
    <div>
      {initialGraphData.length > 0 && (
        <div>
          <select onChange={handleChangeLabel} value={selectedLabel}>
            <option value="">All Labels</option>
            {uniqueLabels.map((label, index) => (
              <option key={index} value={label}>{label}</option>
            ))}
          </select>
        </div>
      )}
      <div style={{position:'absolute',top:'10',left:'10'}}>
        {initialGraphData.length > 0 && (
          <RadialGraph style={{position:'fixed'}} data={{ nodes: filteredNodes, edges: filteredEdges }} {...config} />
        )}
      </div>
    </div>
  );
}

export default Hierarchical;