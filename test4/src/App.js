// import React from "react";
// import LayoutFlow from "./LayoutFlow";

// function App() {
//   return (
//     <>
//      <div>
//       <LayoutFlow/>
//       </div>
//     </>
//   )
  
// };

// export default App;
import React from 'react';
import { TreeGraph } from '@ant-design/graphs';

function App() {
  const data = {
    id: 'root',
    label: 'Root',
    children: [
      {
        id: 'child1',
        label: 'Child 1',
        children: [
          {
            id: 'grandchild1',
            label: 'Grandchild 1',
          },
          {
            id: 'grandchild2',
            label: 'Grandchild 2',
          },
        ],
      },
      {
        id: 'child2',
        label: 'Child 2',
      },
    ],
  };

  const layout = {
    type: 'compactBox',
    direction: 'TB', // top to bottom
    getId: (d) => d.id,
    getHeight: () => 16,
    getWidth: () => 16,
    getVGap: () => 10,
    getHGap: () => 100,
  };

  return <TreeGraph data={data} layout={layout} />;
}

export default App;
