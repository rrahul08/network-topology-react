import React, { useRef, useState, useEffect } from 'react';
import { RadialGraph } from '@ant-design/graphs';
import axios from 'axios';
import pin from './assets/oie_8R6P0yGgouRw.png';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

  const uniqueLabels = [...new Set(initialGraphData[0]?.nodes?.map(node => node.label) || [])];

  const handleChangeLabel = (e) => {
    setSelectedLabel(e.target.value);
  };

  const handleDownload = () => {
    html2canvas(document.getElementById('graph-container'), {
      width: 1500,
      height: 700,
      scale: 2,
      scrollX: 0,
      scrollY: 0,
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'px', [1500 * 2, 700 * 2]);
      pdf.addImage(imgData, 'PNG', 0, 0, 1500 * 2, 700 * 2);
      pdf.save('graph.pdf');
    });
  };

  const filteredNodes = initialGraphData[0]?.nodes?.filter(node => {
    if (selectedLabel) {
      return node.label === selectedLabel;
    }
    return true;
  }) || [];

  const filteredEdges = initialGraphData[0]?.edges?.filter(edge =>
    filteredNodes.some(node => node.id === edge.source) &&
    filteredNodes.some(node => node.id === edge.target)
  ) || [];


 
  const config = {
    type: 'fixed',
    fitview: false,
    width: 1500,
    height: 670,
    layout: {
      type: 'dagre',
      rankdir: 'TB',
      center: [800,400], 
      nodesep: 150, 
      ranksep: 170, 
      controlPoints: false,
    },
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
        formatter: (text, item) => item.getModel().value,
      },
    },
    edgeCfg: {
      style: {
        lineWidth: 11,
        stroke: '#3B444C',
      },
      endArrow: {
        d: 10,
        size: 2,
      },
    },
    behaviors: ['drag-canvas', 'drag-node', 'zoom-canvas'], 
    onReady: (graph) => {
      chartRef.current = graph;
      graph.fitCenter();
    },
    
  };

  return (
    <div>
      {/* <div style={{backgroundColor:'#FA7070',border:'2px solid black'}} >
         <h1 style={{marginLeft:'650px',marginRight:'604px'}}>Topology Viewer</h1>
      </div> */}
    
      <div style={{ position: 'fixed', top: '10', left: '10' }}>
        {initialGraphData.length > 0 && (
          <div id='graph-container'>
            <RadialGraph  data={{ nodes: filteredNodes, edges: filteredEdges }} {...config} />
          </div>
        )}
      </div>
      <div>
      {initialGraphData.length > 0 && (
        <div style={{marginTop:'680px',marginLeft:'630px'}} >
          <select style={{padding:'7px',border:'0px',borderRadius:'8px',paddingLeft:'9px',paddingRight:'9px',color:'white',backgroundColor:'#3876BF'}} onChange={handleChangeLabel} value={selectedLabel}>
            <option s value="">All Labels</option>
            {uniqueLabels.map((label, index) => (
              <option style={{color:'black',backgroundColor:'white'}} key={index} value={label}>{label}</option>
            ))}
          </select>
          <button style={{marginLeft:'30px',padding:'7px',border:'0px',paddingLeft:'9px',paddingRight:'9px',borderRadius:'8px',color:'white',backgroundColor:'#3876BF'}} onClick={handleDownload}>Download as PDF</button>
        </div>
      )}
      </div>
    </div>
  );
}

export default Hierarchical;

