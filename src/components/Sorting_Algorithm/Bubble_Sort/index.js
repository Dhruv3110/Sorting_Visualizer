export const bubbleSorting = async (sortingComponents, setSortingComponents) => {
    const swap = async (i, j, newComponents) => {
      newComponents[i].isSwapping = true;
      newComponents[j].isSwapping = true;
      setSortingComponents([...newComponents]);
  
      await new Promise((resolve) => setTimeout(resolve, 100));
  
      // Swap the heights
      [newComponents[i].height, newComponents[j].height] = [newComponents[j].height, newComponents[i].height];
      setSortingComponents([...newComponents]);
  
      await new Promise((resolve) => setTimeout(resolve, 100));
  
      newComponents[i].isSwapping = false;
      newComponents[j].isSwapping = false;
      setSortingComponents([...newComponents]);
    };
  

    const bubbleSortHelper = async () => {
      let n = sortingComponents.length;
      let newComponents = [...sortingComponents];
  
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          newComponents[j].isComparing = true;
          newComponents[j + 1].isComparing = true;
          setSortingComponents([...newComponents]);
          
          await new Promise((resolve) => setTimeout(resolve, 100));
          
          if (newComponents[j].height > newComponents[j + 1].height) {
            await swap(j, j + 1, newComponents);
          }
          
          newComponents[j].isComparing = false;
          newComponents[j + 1].isComparing = false;
          setSortingComponents([...newComponents]);
        }
      }
    };
  
    await bubbleSortHelper();
  };
  
  export default bubbleSorting;
  