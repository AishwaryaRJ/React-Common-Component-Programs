function mergeAndSortArrays(...arrays) {
    // Step 1: Merge all arrays into one using the spread operator
    const mergedArray = [].concat(...arrays);
  
    // Step 2: Sort the merged array in ascending order
    const sortedArray = mergedArray.sort((a, b) => a - b);
  
    // Step 3: Return the sorted array
    return sortedArray;
  }
  
  // Example usage
  const array1 = [3, 1, 4];
  const array2 = [9, 2, 6];
  const array3 = [5, 7, 8];
  
  const result = mergeAndSortArrays(array1, array2, array3);
  console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  