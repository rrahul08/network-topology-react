import React, { useCallback,useState } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, StraightEdge, SmoothStepEdge } from 'reactflow';
import TextUpdaterNode from './TextUpdater';
 
import 'reactflow/dist/style.css';
import ImageNode from './ImageNode';
const initialNodes = [
  { id: '0', position: { x: 400, y: 50 }, data: { label: '0' } },
  // Root node
  { id: '1', type:'imagenode', position: { x: 300, y: 150 }, data: { label: '1' } }, // Level 1
  { id: '2', type:'imagenode', position: { x: 500, y: 150 }, data: { label: '2' } }, // Level 1
  { id: '3', type:'imagenode', position: { x: 200, y: 250 }, data: { label: '3' } }, // Level 2
  { id: '4',type:'imagenode',  position: { x: 400, y: 250 }, data: { label: '4' } }, // Level 2
  { id: '5',type:'imagenode',  position: { x: 600, y: 250 }, data: { label: '5' } }, // Level 2
  { id: '6', type:'imagenode', position: { x: 150, y: 350 }, data: { label: '6' } }, // Level 3
  { id: '7', type:'imagenode', position: { x: 300, y: 350 }, data: { label: '7' } }, // Level 3
  { id: '8', type:'imagenode', position: { x: 500, y: 350 }, data: { label: '8' } }, // Level 3
  { id: '9', type:'imagenode', position: { x: 650, y: 350 }, data: { label: '9' } }, // Level 3
];


const initialEdges = [
  { id: 'e0-1', source: '0', target: '1' ,type : 'straight'},
  { id: 'e0-2', source: '0', target: '2', type : 'straight' },
  { id: 'e1-3', source: '1', target: '3', type : 'straight' },
  { id: 'e1-4', source: '1', target: '4', type : 'straight' },
  { id: 'e2-5', source: '2', target: '5',type : 'straight' },
  { id: 'e3-6', source: '3', target: '6' ,type : 'straight'},
  { id: 'e3-7', source: '3', target: '7' ,type : 'straight'},
  { id: 'e4-8', source: '4', target: '8' ,type : 'straight'},
  { id: 'e5-9', source: '5', target: '9',type : 'straight' },
];

const nodeTypes = { textUpdater: TextUpdaterNode, imagenode: ImageNode };
 
function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(initialNodes[0]);

 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const handleNodeChange = useCallback(
    (event) => {
      const selectedNodeId = event.target.value;
      const selectedNodeIndex = nodes.findIndex(node => node.id === selectedNodeId);
      if (selectedNodeIndex !== -1) {
        const tempNode = nodes[selectedNodeIndex];
        const rootNode = nodes[0];
        const updatedNodes = nodes.map(node => {
          if (node.id === tempNode.id) {
            return rootNode;
          } else if (node.id === rootNode.id) {
            return tempNode;
          } else {
            return node;
          }
        });
        setNodes(updatedNodes);
        setSelectedNode(tempNode);
      }
    },
    [nodes, setNodes]
  );
  

  const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

  const defaultEdgeOptions = { animated: false };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
       <select value={selectedNode.id} onChange={handleNodeChange}>
        {initialNodes.map(node => (
          <option key={node.id} value={node.id}>{node.data.label}</option>
        ))}
      </select>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        // edgeTypes={{
        //   smoothstep: SmoothStepEdge,
        // }}
        snapToGrid={true}
        snapGrid={[15, 15]}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default App;