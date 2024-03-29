import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import customImage from './assets/oie_jddxj7nTKIws.jpg'
import './App.css'

const handleStyle = { left: 10 };

function ImageNode({ data }) {


  return (
    <>
      <Handle type="target" position={Position.Top}  className="hide-handle" />
      <div>
     
        <img src={customImage} alt="Custom Image" style={{ width: '40px', height: '40px' }} />
        <p style={{ marginTop: '5px', fontSize: '12px' }}>{data.label}</p>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" className="hide-handle"  />
   
    </>
  );
}

export default ImageNode;
