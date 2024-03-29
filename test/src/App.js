import React, { useRef , useState } from 'react';
import ReactDOM from 'react-dom';
import { RadialGraph } from '@ant-design/graphs';

const App = () => {
  const chartRef = useRef();
  const [selectedLabel, setSelectedLabel] = useState(null);

  const RadialData = [
    {
        "_key": "9080",
        "_id": "hierarchical/9080",
        "_rev": "_hZ9846a---",
        "hierarchical": {
            "nodes": [
                {
                    "id": "0",
                    "value":"0",
                    "label": "ospf"
                },
                {
                    "id": "1",
                    "value":"1",
                    "label": "isis"
                },
                {
                    "id": "2",
                    "value":"2",
                    "label": "ospf"
                },
                {
                    "id": "3",
                    "value":"3",
                    "label": "3"
                },
                {
                    "id": "4",
                    "value":"4",
                    "label": "isis"
                },
                {
                    "id": "5",
                    "value":"5",
                    "label": "ospf"
                },
                {
                    "id": "6",
                    "value":"6",
                    "label": "6"
                },
                {
                    "id": "7",
                    "value":"7",
                    "label": "7"
                },
                {
                    "id": "8",
                    "value":"8",
                    "label": "isis"
                },
                {
                    "id": "9",
                    "value":"9",
                    "label": "ospf"
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
const uniqueLabels = [...new Set(RadialData[0].hierarchical.nodes.map(node => node.label))];

// Filter nodes based on the selected label value
const filteredNodes = selectedLabel ? RadialData[0].hierarchical.nodes.filter(node => node.label === selectedLabel) : RadialData[0].hierarchical.nodes;

// Filter edges based on the selected label value
const filteredEdges = RadialData[0].hierarchical.edges.filter(edge =>
  filteredNodes.some(node => node.id === edge.source) &&
  filteredNodes.some(node => node.id === edge.target)
);

const handleChangeLabel = (e) => {
  setSelectedLabel(e.target.value);
};




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

  const config = {
    // data: RadialData,
    autoFit: false,
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
      size: 20,
      style: {
        fill: '#6CE8DC',
        stroke: '#6CE8DC',
      },
      labelCfg: {
        style: {
          fontSize: 5,
          fill: '#000',
        },
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
    behaviors: ['drag-canvas', 'drag-node','zoom-canvas'],
    onReady: (graph) => {
      chartRef.current = graph;
    },
  };

  return (
  <div>
    {/* {RadialData.map((item, index) => (
      <RadialGraph key={index} data={item.hierarchical} {...config} />
    ))} */}
  <div>
        <select onChange={handleChangeLabel}>
          <option value="">All Labels</option>
          {uniqueLabels.map((label, index) => (
            <option key={index} value={label}>{label}</option>
          ))}
        </select>
      </div>
      <div>
        <RadialGraph data={{ nodes: filteredNodes, edges: filteredEdges }} {...config} />
      </div>
    
  </div>
);

};

export default App;


// },
    // {
    //     "_key": "3682",
    //     "_id": "hierarchical/3682",
    //     "_rev": "_ha-oexq---",
    //     "hierarchical": {
    //         "nodes": [
    //             {
    //                 "id": "0",
    //                 "label": "0"
    //             },
    //             {
    //                 "id": "1",
    //                 "label": "1"
    //             },
    //             {
    //                 "id": "2",
    //                 "label": "2"
    //             },
    //             {
    //                 "id": "3",
    //                 "label": "3"
    //             },
    //             {
    //                 "id": "4",
    //                 "label": "4"
    //             },
    //             {
    //                 "id": "5",
    //                 "label": "5"
    //             },
    //             {
    //                 "id": "6",
    //                 "label": "6"
    //             },
    //             {
    //                 "id": "7",
    //                 "label": "7"
    //             },
    //             {
    //                 "id": "8",
    //                 "label": "8"
    //             },
    //             {
    //                 "id": "9",
    //                 "label": "9"
    //             },
    //             {
    //                 "id": "10",
    //                 "label": "10"
    //             },
    //             {
    //                 "id": "11",
    //                 "label": "11"
    //             },
    //             {
    //                 "id": "12",
    //                 "label": "12"
    //             }
    //         ],
    //         "edges": [
    //             {
    //                 "source": "0",
    //                 "target": "1"
    //             },
    //             {
    //                 "source": "0",
    //                 "target": "2"
    //             },
    //             {
    //                 "source": "1",
    //                 "target": "3"
    //             },
    //             {
    //                 "source": "1",
    //                 "target": "4"
    //             },
    //             {
    //                 "source": "2",
    //                 "target": "5"
    //             },
    //             {
    //                 "source": "3",
    //                 "target": "6"
    //             },
    //             {
    //                 "source": "3",
    //                 "target": "7"
    //             },
    //             {
    //                 "source": "4",
    //                 "target": "8"
    //             },
    //             {
    //                 "source": "5",
    //                 "target": "9"
    //             },
    //             {
    //                 "source": "6",
    //                 "target": "10"
    //             },
    //             {
    //                 "source": "7",
    //                 "target": "11"
    //             },
    //             {
    //                 "source": "8",
    //                 "target": "12"
    //             }
    //         ]
    //     }
    // },
    // {
    //     "_key": "10552",
    //     "_id": "hierarchical/10552",
    //     "_rev": "_ha-urxG---",
    //     "hierarchical": {
    //         "nodes": [
    //             {
    //                 "id": "18",
    //                 "label": "X"
    //             },
    //             {
    //                 "id": "19",
    //                 "label": "Y"
    //             },
    //             {
    //                 "id": "20",
    //                 "label": "Z"
    //             },
    //             {
    //                 "id": "21",
    //                 "label": "W"
    //             },
    //             {
    //                 "id": "22",
    //                 "label": "V"
    //             },
    //             {
    //                 "id": "23",
    //                 "label": "U"
    //             },
    //             {
    //                 "id": "24",
    //                 "label": "T"
    //             },
    //             {
    //                 "id": "25",
    //                 "label": "S"
    //             },
    //             {
    //                 "id": "26",
    //                 "label": "R"
    //             },
    //             {
    //                 "id": "27",
    //                 "label": "Q"
    //             },
    //             {
    //                 "id": "28",
    //                 "label": "P"
    //             },
    //             {
    //                 "id": "29",
    //                 "label": "O"
    //             },
    //             {
    //                 "id": "30",
    //                 "label": "N"
    //             }
    //         ],
    //         "edges": [
    //             {
    //                 "source": "18",
    //                 "target": "19"
    //             },
    //             {
    //                 "source": "18",
    //                 "target": "20"
    //             },
    //             {
    //                 "source": "19",
    //                 "target": "21"
    //             },
    //             {
    //                 "source": "19",
    //                 "target": "22"
    //             },
    //             {
    //                 "source": "20",
    //                 "target": "23"
    //             },
    //             {
    //                 "source": "21",
    //                 "target": "24"
    //             },
    //             {
    //                 "source": "23",
    //                 "target": "25"
    //             },
    //             {
    //                 "source": "22",
    //                 "target": "26"
    //             },
    //             {
    //                 "source": "23",
    //                 "target": "27"
    //             },
    //             {
    //                 "source": "24",
    //                 "target": "28"
    //             },
    //             {
    //                 "source": "25",
    //                 "target": "29"
    //             },
    //             {
    //                 "source": "26",
    //                 "target": "30"
    //             }
    //         ]
    //     }
    // },
    // {
    //     "_key": "10876",
    //     "_id": "hierarchical/10876",
    //     "_rev": "_ha-4cZC---",
    //     "hierarchical": {
    //         "nodes": [
    //             {
    //                 "id": "18",
    //                 "label": "X"
    //             },
    //             {
    //                 "id": "19",
    //                 "label": "Y"
    //             },
    //             {
    //                 "id": "20",
    //                 "label": "Z"
    //             },
    //             {
    //                 "id": "21",
    //                 "label": "W"
    //             },
    //             {
    //                 "id": "22",
    //                 "label": "V"
    //             },
    //             {
    //                 "id": "23",
    //                 "label": "U"
    //             },
    //             {
    //                 "id": "24",
    //                 "label": "T"
    //             },
    //             {
    //                 "id": "25",
    //                 "label": "S"
    //             },
    //             {
    //                 "id": "26",
    //                 "label": "R"
    //             },
    //             {
    //                 "id": "27",
    //                 "label": "Q"
    //             },
    //             {
    //                 "id": "28",
    //                 "label": "P"
    //             },
    //             {
    //                 "id": "29",
    //                 "label": "O"
    //             },
    //             {
    //                 "id": "30",
    //                 "label": "N"
    //             }
    //         ],
    //         "edges": [
    //             {
    //                 "source": "18",
    //                 "target": "19"
    //             },
    //             {
    //                 "source": "18",
    //                 "target": "20"
    //             },
    //             {
    //                 "source": "19",
    //                 "target": "21"
    //             },
    //             {
    //                 "source": "19",
    //                 "target": "22"
    //             },
    //             {
    //                 "source": "20",
    //                 "target": "23"
    //             },
    //             {
    //                 "source": "21",
    //                 "target": "24"
    //             },
    //             {
    //                 "source": "20",
    //                 "target": "25"
    //             },
    //             {
    //                 "source": "22",
    //                 "target": "26"
    //             },
    //             {
    //                 "source": "23",
    //                 "target": "27"
    //             },
    //             {
    //                 "source": "24",
    //                 "target": "28"
    //             },
    //             {
    //                 "source": "25",
    //                 "target": "29"
    //             },
    //             {
    //                 "source": "26",
    //                 "target": "30"
    //             }
    //         ]
    //     }
    // }