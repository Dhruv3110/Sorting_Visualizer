export const InsertionSorting = async (sortingComponents, setSortingComponents) => {
    const swap = async (i, j) => {
      const newComponents = [...sortingComponents];
  
      newComponents[i].isSwapping = true;
      newComponents[j].isSwapping = true;
      setSortingComponents([...newComponents]);
  
      await new Promise((resolve) => setTimeout(resolve, 200));
  
      // Swap the heights
      [newComponents[i].height, newComponents[j].height] = [newComponents[j].height, newComponents[i].height];
      setSortingComponents([...newComponents]);
  
      await new Promise((resolve) => setTimeout(resolve, 200));
  
      newComponents[i].isSwapping = false;
      newComponents[j].isSwapping = false;
      setSortingComponents([...newComponents]);
    };
  
    const newComponents = [...sortingComponents];
  
    for (let i = 1; i < newComponents.length; i++) {
      let j = i;
      const currentHeight = newComponents[i].height;
  
      newComponents[i].isComparing = true;
      setSortingComponents([...newComponents]);
      await new Promise((resolve) => setTimeout(resolve, 200));
  
      while (j > 0 && newComponents[j - 1].height > currentHeight) {
        await swap(j, j - 1);
        j--;
      }
  
      newComponents[i].isComparing = false;
      setSortingComponents([...newComponents]);
    }
  };
  
  export default InsertionSorting;
  