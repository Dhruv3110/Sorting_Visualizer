export const QuickSorting = async (sortingComponents, setSortingComponents) => {
    const quickSortHelper = async (low, high) => {
      if (low < high) {
        const pi = await partition(low, high);
        await quickSortHelper(low, pi - 1);
        await quickSortHelper(pi + 1, high);
      }
    };
    const partition = async (low, high) => {
      let pivot = sortingComponents[high].height;
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        const newComponents = [...sortingComponents];
        newComponents[j].isComparing = true;
        setSortingComponents([...newComponents]);
  
        await new Promise((resolve) => setTimeout(resolve, 100));
  
        if (newComponents[j].height < pivot) {
          i++;
          await swap(i, j, newComponents, setSortingComponents, 100);
        }
  
        newComponents[j].isComparing = false;
        setSortingComponents([...newComponents]);
      }
      await swap(i + 1, high, sortingComponents, setSortingComponents, 100);
      return i + 1;
    };
  
    const swap = async (i, j, newComponents, setSortingComponents) => {
      newComponents[i].isSwapping = true;
      newComponents[j].isSwapping = true;
      setSortingComponents([...newComponents]);
  
      await new Promise((resolve) => setTimeout(resolve, 100));
  
      [newComponents[i].height, newComponents[j].height] = [newComponents[j].height, newComponents[i].height];
      [newComponents[i].currentPosition, newComponents[j].currentPosition] = [newComponents[j].currentPosition, newComponents[i].currentPosition];

      setSortingComponents([...newComponents]);
  
      await new Promise((resolve) => setTimeout(resolve, 100));
  
      newComponents[i].isSwapping = false;
      newComponents[j].isSwapping = false;
      setSortingComponents([...newComponents]);
    };
  
    await quickSortHelper(0, sortingComponents.length - 1);
  };
  
  export default QuickSorting;
  