// import React, { useRef, useState } from 'react';
// import ReactDOM from 'react-dom';
// import { RadialGraph } from '@ant-design/graphs';

// function App (){
//   const chartRef = useRef();
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [graphData, setGraphData] = useState(null);

//   const initialGraphData = {
//     // 
//     "nodes": [
//       {
//         "id": "0",
//         "label": "0"
//       },
//       {
//         "id": "1",
//         "label": "1"
//       },
//       {
//         "id": "2",
//         "label": "2"
//       },
//       {
//         "id": "3",
//         "label": "3"
//       },
//       {
//         "id": "4",
//         "label": "4"
//       },
//       {
//         "id": "5",
//         "label": "5"
//       },
//       {
//         "id": "6",
//         "label": "6"
//       },
//       {
//         "id": "7",
//         "label": "7"
//       },
//       {
//         "id": "8",
//         "label": "8"
//       },
//       {
//         "id": "9",
//         "label": "9"
//       }
//     ],
//     "edges": [
//       {
//         "source": "0",
//         "target": "1"
//       },
//       {
//         "source": "0",
//         "target": "2"
//       },
//       {
//         "source": "1",
//         "target": "3"
//       },
//       {
//         "source": "1",
//         "target": "4"
//       },
//       {
//         "source": "2",
//         "target": "5"
//       },
//       {
//         "source": "3",
//         "target": "6"
//       },
//       {
//         "source": "3",
//         "target": "7"
//       },
//       {
//         "source": "4",
//         "target": "8"
//       },
//       {
//         "source": "5",
//         "target": "9"
//       }
//     ]
//   };

//   const fetchData = (node) => {
//     return new Promise((resolve, reject) => {
//       const data = new Array(Math.ceil(Math.random() * 10) + 2).fill('').map((_, i) => i + 1);
//       setTimeout(() => {
//         resolve({
//           nodes: [
//             {
//               ...node,
//             },
//           ].concat(
//             data.map((i) => {
//               return {
//                 id: `${node.id}-${i}`,
//                 label: `${node.label}-${i}`,
//               };
//             }),
//           ),
//           edges: data.map((i) => {
//             return {
//               source: node.id,
//               target: `${node.id}-${i}`,
//             };
//           }),
//         });
//       }, 1000);
//     });
//   };

//   const asyncData = async (node) => {
//     return await fetchData(node);
//   };

//   const handleNodeSelect = (event) => {
//     const selectedNodeId = event.target.value;
//     setSelectedNode(selectedNodeId);
//     updateGraphData(selectedNodeId);
//   };

//   // };
//   const updateGraphData = (selectedNodeId) => {
//     const updatedEdges = initialGraphData.edges.map((edge) => {
//       if (edge.source !== selectedNodeId && edge.target !== selectedNodeId) {
//         return edge;
//       }
//       return {
//         source: selectedNodeId,
//         target: edge.source === selectedNodeId ? edge.target : edge.source,
//       };
//     });

//     setGraphData({ nodes: initialGraphData.nodes, edges: updatedEdges });
//   };

  
//   const config = {
//     data: graphData || initialGraphData,
//     autoFit: false,
//     layout: {
//       unitRadius: 80,
//       nodeSize: 20,
//       nodeSpacing: 10,
//     },
//     nodeCfg: {
//       asyncData,
//       size: 20,
//       style: {
//         fill: '#6CE8DC',
//         stroke: '#6CE8DC',
//       },
//       labelCfg: {
//         style: {
//           fontSize: 5,
//           fill: '#000',
//         },
//       },
//     },
//     menuCfg: {
//       customContent: (e) => {
//         return (
//           <div>
//             <button
//               onClick={() => {
//                 chartRef.current.emit('node:dblclick', e);
//               }}
//             >
//               手动拓展(双击节点也可以拓展)
//             </button>
//           </div>
//         );
//       },
//     },
//     edgeCfg: {
//       style: {
//         lineWidth: 1,
//       },
//       endArrow: {
//         d: 10,
//         size: 2,
//       },
//     },
//     behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
//     onReady: (graph) => {
//       chartRef.current = graph;
//     },
//   };

//   return (
//     <div>
//       <RadialGraph {...config} />
//       <div>
//         <label htmlFor="nodeSelect">Select Node: </label>
//         <select id="nodeSelect" onChange={handleNodeSelect}>
//           <option value={null}>-- Select Node --</option>
//           {initialGraphData.nodes.map((node) => (
//             <option key={node.id} value={node.id}>
//               {node.label}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { RadialGraph } from '@ant-design/graphs';

function App (){
  const chartRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [graphData, setGraphData] = useState(null);
 

  const initialGraphData =[
    {
        "_key": "9080",
        "_id": "hierarchical/9080",
        "_rev": "_hZ9846a---",
        "hierarchical": {
            "nodes": [
                {
                    "id": "0",
                    "label": "0"
                },
                {
                    "id": "1",
                    "label": "1"
                },
                {
                    "id": "2",
                    "label": "2"
                },
                {
                    "id": "3",
                    "label": "3"
                },
                {
                    "id": "4",
                    "label": "4"
                },
                {
                    "id": "5",
                    "label": "5"
                },
                {
                    "id": "6",
                    "label": "6"
                },
                {
                    "id": "7",
                    "label": "7"
                },
                {
                    "id": "8",
                    "label": "8"
                },
                {
                    "id": "9",
                    "label": "9"
                }
            ],
            "edges": [
                {
                    "source": "0",
                    "target": "1"
                },
                {
                    "source": "0",
                    "target": "2"
                },
                {
                    "source": "1",
                    "target": "3"
                },
                {
                    "source": "1",
                    "target": "4"
                },
                {
                    "source": "2",
                    "target": "5"
                },
                {
                    "source": "3",
                    "target": "6"
                },
                {
                    "source": "3",
                    "target": "7"
                },
                {
                    "source": "4",
                    "target": "8"
                },
                {
                    "source": "5",
                    "target": "9"
                }
            ]
        
    
    }
}
]

  const fetchData = (node) => {
    return new Promise((resolve, reject) => {
      const data = new Array(Math.ceil(Math.random() * 10) + 2).fill('').map((_, i) => i + 1);
      setTimeout(() => {
        resolve({
          nodes: [
            {
              ...node,
            },
          ].concat(
            data.map((i) => {
              return {
                id: `${node.id}-${i}`,
                label: `${node.label}-${i}`,
              };
            }),
          ),
          edges: data.map((i) => {
            return {
              source: node.id,
              target: `${node.id}-${i}`,
            };
          }),
        });
      }, 1000);
    });
  };

  const asyncData = async (node) => {
    return await fetchData(node);
  };

 
  const handleNodeSelect = (event) => {
    const selectedNodeId = event.target.value;
    setSelectedNode(selectedNodeId);
    updateGraphData(selectedNodeId);
  };

  const updateGraphData = (selectedNodeId) => {
    const selectedNodeData = initialGraphData.find(item => item.hierarchical.nodes.find(node => node.id === selectedNodeId));
  
    if (selectedNodeData) {
      const { nodes, edges } = selectedNodeData.hierarchical;

      const filteredNodes = nodes.filter(node => node.id !== selectedNodeId);
      
      const filteredEdges = edges.filter(edge => edge.source !== selectedNodeId && edge.target !== selectedNodeId);
      
      const childrenEdges = edges.filter(edge => edge.source === selectedNodeId);
      
      const rootNode = {
        id: selectedNodeId,
        label: selectedNodeData.hierarchical.nodes.find(node => node.id === selectedNodeId).label,
      };
  
      const updatedEdges = childrenEdges.map(edge => ({
        source: selectedNodeId,
        target: edge.target,
      }));
  
      setGraphData({
        nodes: [rootNode, ...filteredNodes],
        edges: [...filteredEdges, ...updatedEdges],
      });
    }
  };
                      
  

  
  
  
  
  const config = {
    // data: graphData || initialGraphData[0].hierarchical,     
    autoFit: false,
    width:1300,
    height:600,
    layout: {
        // type:'radial',
        type: 'dagre', // Use the Dagre layout
                  rankdir: 'LR', // Set the direction from left to right
                  align: 'UL',
                  nodesep: 10,
                  ranksep: 40,
                  controlPoints: false,
      },
    nodeCfg: {
      asyncData,
      size: 40,
      style: {
        fill: '#6CE8DC',
        stroke: '#6CE8DC',
      },
      labelCfg: {
        style: {
          fontSize: 15,
          fill: '#000',
        },
      },
    },
    menuCfg: {
      customContent: (e) => {
        return (
          <div>
            <button
              onClick={() => {
                chartRef.current.emit('node:dblclick', e);
              }}
            >
                
            </button>
          </div>
        );
      },
    },
    edgeCfg: {
      style: {
        lineWidth: 1,
      },
      endArrow: {
        d: 10,
        size: 2,
      },
    },
    behaviors: ['drag-canvas', 'drag-node'],
    onReady: (graph) => {
      chartRef.current = graph;
    },
  };

  return (
    <div>
      <div className='canvas'>
        {/* <RadialGraph style={{ marginLeft: '50px', width: '100%', height: '100%', border: '1px solid black' }}
        {...config} />
        {console.log('graphdata-',graphData)} */}
        {initialGraphData.map((item, index) => (
            <div>
      <RadialGraph key={index} data={graphData || item.hierarchical} {...config} />
      <div>
            <label htmlFor={`nodeSelect-${index}`}>Select Node: </label>
            <select id={`nodeSelect-${index}`} onChange={(event) => handleNodeSelect(event, index)}>
              <option value={null}>-- Select Node --</option>
              {item.hierarchical.nodes.map((node) => (
                <option key={node.id} value={node.id}>
                  {node.label}
                </option>
              ))}
            </select>
          </div>
          </div>
    ))}
    {/* <RadialGraph style={{ marginLeft: '50px', width: '100%', height: '100%', border: '1px solid black' }}
      data={graphData || initialGraphData[0].hierarchical}  {...config} /> */}

      </div>
      
    </div>
  );
};

export default App;

