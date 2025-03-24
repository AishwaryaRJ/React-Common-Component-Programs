const data = [
  {
    name: 'Anurag',
    children: [
      {
        name: 'Prem',
        children: [
          {
            name: 'Kumar'
          }
        ]
      },
      {
        name: 'Sita',
        children: null
      }
    ]
  },
  {
    name: 'Mohan'
  }
];

function extractNames(arr) {
  const names = [];

  // Helper function to traverse the hierarchy
  function traverse(node) {
    if (node.name) {
      names.push(node.name); // Add the name to the result array
    }
    if (node.children && Array.isArray(node.children)) {
      node.children.forEach(traverse); // Recursively traverse children
    }
  }

  arr.forEach(traverse); // Start traversal for each root node
  return names;
}

const result = extractNames(data);
console.log(result); // Output: ['Anurag', 'Prem', 'Kumar', 'Sita', 'Mohan']


///////////////////////////////////////

  
  function extractNames(arr) {
    return arr.flatMap(({ name, children }) => {
      // Add the current name and recursively process children
      return children ? [name, ...extractNames(children)] : [name];
    });
  }
  
  const result1 = extractNames(data);
  console.log(result1); // Output: ['Anurag', 'Prem', 'Kumar', 'Sita', 'Mohan']
  