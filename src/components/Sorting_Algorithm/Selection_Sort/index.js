export const SelectionSorting = async (sortingComponents, setSortingComponents) => {
    const swap = async (i, j) => {
      const newComponents = [...sortingComponents];
  
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
  
    const newComponents = [...sortingComponents];
  
    for (let i = 0; i < newComponents.length - 1; i++) {
      let minIndex = i;
      newComponents[minIndex].isComparing = true;
      setSortingComponents([...newComponents]);
  
      for (let j = i + 1; j < newComponents.length; j++) {
        newComponents[j].isComparing = true;
        setSortingComponents([...newComponents]);
  
        await new Promise((resolve) => setTimeout(resolve, 100));
  
        if (newComponents[j].height < newComponents[minIndex].height) {
          newComponents[minIndex].isComparing = false;
          minIndex = j;
        } else {
          newComponents[j].isComparing = false;
        }
  
        setSortingComponents([...newComponents]);
      }
  
      if (minIndex !== i) {
        await swap(i, minIndex);
      }
  
      newComponents[i].isComparing = false;
      newComponents[minIndex].isComparing = false;
      setSortingComponents([...newComponents]);
    }
  };
  
  export default SelectionSorting;
  