
export const MergeSorting = async (sortingComponents, setSortingComponents) => {
    await mergeDivider(0, sortingComponents.length - 1, sortingComponents, setSortingComponents);
  };
  
  const mergeDivider = async (start, end, sortingComponents, setSortingComponents) => {
    if (start < end) {
      let mid = start + Math.floor((end - start) / 2);
      await mergeDivider(start, mid, sortingComponents, setSortingComponents );
      await mergeDivider(mid + 1, end, sortingComponents, setSortingComponents);
      await merge(start, mid, end, sortingComponents, setSortingComponents );
    }
  };
  
  const merge = async (start, mid, end, sortingComponents, setSortingComponents) => {
    let newList = [];
    let leftCounter = start;
    let rightCounter = mid + 1;
  
    const newComponents = [...sortingComponents];
  
    while (leftCounter <= mid && rightCounter <= end) {
      const leftHeight = newComponents[leftCounter].height;
      const rightHeight = newComponents[rightCounter].height;
  
      if (leftHeight <= rightHeight) {
        newList.push(newComponents[leftCounter].height);
        leftCounter++;
      } else {
        newList.push(newComponents[rightCounter].height);
        rightCounter++;
      }
    }
  
    while (leftCounter <= mid) {
      newList.push(newComponents[leftCounter].height);
      leftCounter++;
    }
  
    while (rightCounter <= end) {
      newList.push(newComponents[rightCounter].height);
      rightCounter++;
    }
  
    for (let i = start, j = 0; i <= end; i++, j++) {
      newComponents[i].height = newList[j];
      newComponents[i].isComparing = true;
      setSortingComponents([...newComponents]);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  
    for (let i = start; i <= end; i++) {
      newComponents[i].isComparing = false;
    }
  
    setSortingComponents([...newComponents]);
  };
  