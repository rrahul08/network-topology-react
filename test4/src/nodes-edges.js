const position = { x: 0, y: 0 };
const edgeType = 'straight';

export const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input',imageSrc: 'https://itexamanswers.net/wp-content/uploads/2020/12/2020-12-10_222020.jpg' },
    position: { x: 100, y: 100 } ,
  },
  {
    id: '2',
    data: { label: 'node 2' },
    position,
  },
  {
    id: '2a',
    data: { label: 'node 2a' },
    position,
  },
  {
    id: '2b',
    data: { label: 'node 2b' },
    position,
  },
  {
    id: '2c',
    data: { label: 'node 2c' },
    position,
  },
  {
    id: '2d',
    data: { label: 'node 2d' },
    position,
  },
  {
    id: '3',
    data: { label: 'node 3' },
    position,
  },
  {
    id: '4',
    data: { label: 'node 4' },
    position,
  },
  {
    id: '5',
    data: { label: 'node 5' },
    position,
  },
  {
    id: '6',
    type: 'output',
    data: { label: 'output' },
    position,
  },
  { id: '7', type: 'output', data: { label: 'output' }, position },
];

export const initialEdges = [
  { id: 'e12', source: '1', target: '2', type: edgeType, animated: false },
  { id: 'e13', source: '1', target: '3', type: edgeType, animated: false },
  { id: 'e22a', source: '2', target: '2a', type: edgeType, animated: false },
  { id: 'e22b', source: '2', target: '2b', type: edgeType, animated: false },
  { id: 'e22c', source: '2', target: '2c', type: edgeType, animated: false },
  { id: 'e2c2d', source: '2c', target: '2d', type: edgeType, animated: false },
  { id: 'e45', source: '4', target: '5', type: edgeType, animated: false },
  { id: 'e56', source: '5', target: '6', type: edgeType, animated: false },
  { id: 'e57', source: '5', target: '7', type: edgeType, animated: false },
];
