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
    let names = [];
    for (const item of arr) {
        if (item.name) {
            names.push(item.name);
        }

        // Corrected 'childeren' to 'children'
        if (item.children) {
            names = names.concat(extractNames(item.children));
        }
    }

    return names;
}

console.log(extractNames(data));