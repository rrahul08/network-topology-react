import React from 'react';
import ReactFlow, { Controls, MiniMap } from 'react-flow-renderer';

const treeElements = [
  { id: '1', data: { label: 'Root' }, position: { x: 500, y: 25 }, type: 'input' },
  { id: '2', data: { label: 'Child 1' }, position: { x: 300, y: 125 }, type: 'default' },
  { id: '3', data: { label: 'Child 2' }, position: { x: 700, y: 125 }, type: 'default' },
  { id: '4', data: { label: 'Grandchild 1' }, position: { x: 200, y: 225 }, type: 'default' },
  { id: '5', data: { label: 'Grandchild 2' }, position: { x: 400, y: 225 }, type: 'default' },
  { id: '6', data: { label: 'Grandchild 3' }, position: { x: 600, y: 225 }, type: 'default' },
  { id: '7', data: { label: 'Grandchild 4' }, position: { x: 800, y: 225 }, type: 'default' },
];

const hierarchicalLayout = { direction: 'TB', nodeSpacing: 100, levelSeparation: 200 };

const TreeFlow = () => {
  return (
    <div style={{ height: 600, border: '1px solid #ddd' }}>
      <ReactFlow
        elements={treeElements}
        style={{ width: '100%', height: '100%' }}
        defaultZoom={1.5}
        nodeTypes={{ default: { type: 'default', label: 'Node' } }}
        edgeTypes={{ default: { type: 'default', label: 'Edge' } }}
        layout={hierarchicalLayout}
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default TreeFlow;
