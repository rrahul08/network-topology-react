// ImageNode.js
import React from 'react';

const ImageNode = ({ data }) => {
  return (
    <div style={{ width: '100px', height: '100px', position: 'relative' }}>
      <img src={data.imageSrc} alt={data.label} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default ImageNode;
