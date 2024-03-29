import pin from './assets/oie_8R6P0yGgouRw.png'


// const fetchData = (node) => {
//   return new Promise((resolve, reject) => {
//     const data = new Array(Math.ceil(Math.random() * 10) + 2).fill('').map((_, i) => i + 1);
//     setTimeout(() => {
//       resolve({
//         nodes: [
//           {
//             ...node,
//           },
//         ].concat(
//           data.map((i) => {
//             return {
//               id: `${node.id}-${i}`,
//               label: `${node.label}-${i}`,
//             };
//           }),
//         ),
//         edges: data.map((i) => {
//           return {
//             source: node.id,
//             target: `${node.id}-${i}`,
//           };
//         }),
//       });
//     }, 1000);
//   });
// };

// const asyncData = async (node) => {
//   return await fetchData(node);
// };

const graphConfig = {
    autoFit: true,
    layout: {
      unitRadius: 50,
      nodeSize: 700,
      nodeSpacing: 20,
    },
    nodeCfg: {
      type:'image',
      img:pin,
      size: 18,
      style: {
        fill: '#483d8b',
        stroke: '#483d8b',
      },
      labelCfg: {
        style: {
          fontSize: 7,
          fill: '#000000',
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
  };
  
  export default graphConfig;