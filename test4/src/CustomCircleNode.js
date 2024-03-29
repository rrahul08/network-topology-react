import React from 'react';
import { Handle } from 'react-flow-renderer'; // Import Handle if you want connectors

const CustomCircleNode = ({ data }) => {
  return (
    <div style={{ borderRadius: '50%', background: 'lightblue', padding: '10px' }}>
      {data.label}
      <Handle type="target" position="top" style={{ background: 'red' }} />
      <Handle type="source" position="bottom" style={{ background: 'green' }} />
    </div>
  );
};

export default CustomCircleNode;