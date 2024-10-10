import React, {useState, useEffect} from 'react'
import "./quick.css"
import { QuickSorting } from '../../components/Sorting_Algorithm/Quick_Sort';
import {MergeSorting} from '../../components/Sorting_Algorithm/Merge_Sort'
import {bubbleSorting} from '../../components/Sorting_Algorithm/Bubble_Sort'
import {SelectionSorting} from '../../components/Sorting_Algorithm/Selection_Sort'
import {InsertionSorting} from '../../components/Sorting_Algorithm/Insertion_Sort'
import {quickSortCCode, quickSortCPPCode, quickSortJSCode, quickSortJavaCode, quickSortPCode} from '../../Helper/QuickSortCode/QuickSortCode'
import {mergeSortCCode, mergeSortCPPCode, mergeSortJSCode, mergeSortJavaCode, mergeSortPCode} from '../../Helper/MergeSortCode/MergeSortCode'
import {bubbleSortCCode, bubbleSortCPPCode, bubbleSortJSCode, bubbleSortJavaCode, bubbleSortPCode} from '../../Helper/BubbleSortCode/BubbleSortCode'
import {selectionSortCCode, selectionSortCPPCode, selectionSortJSCode, selectionSortJavaCode, selectionSortPCode} from '../../Helper/SelectionSortCode/SelectionSortCode'
import {insertionSortCCode, insertionSortCPPCode, insertionSortJSCode, insertionSortJavaCode, insertionSortPCode} from '../../Helper/InsertionSortCode/InsertionSortCode'
import {useLocation} from 'react-router-dom';
const QuickSort = () => {
  const [code, setCode] = useState('');
  const [sortingComponents, setSortingComponents] = useState([]);
  const [bars, setBars] = useState(10);
  const [isSorting, setIsSorting] = useState(false);
  const [activateBTN, setActivateBtn]= useState(null);
  const location = useLocation();
  const isMergeSort = location.pathname === '/mergesort';
  const isBubbleSort = location.pathname === '/bubblesort';
  const isQuickSort = location.pathname === '/quicksort';
  const isSelectionSort = location.pathname === '/selectionsort';
  const isInsertionSort = location.pathname === '/insertionsort';

  const getTitle = () => {
    if (isMergeSort) return 'Merge Sort';
    if (isBubbleSort) return 'Bubble Sort';
    if (isQuickSort) return 'Quick Sort';
    if (isSelectionSort) return 'Selection Sort';
    if (isInsertionSort) return 'Insertion Sort';
    return 'Sorting Algorithm'; 
  };

  const handleNewArrayClick = () => {
    const min = 10;
    const max = 80;
    const randomCount = Math.floor(Math.random() * (max - min + 1)) + min;
    const newSortingComponents = generateSortingComponents(randomCount);
    setSortingComponents(newSortingComponents);
    setBars(randomCount);
  };

  const handleBarChange = (event) => {

    const barCount = Math.max(10, Math.min(80, event.target.value));
    setBars(barCount);
    if(!isSorting){
      const newSortingComponents = generateSortingComponents(barCount);
      setSortingComponents(newSortingComponents);
    }

  };

  const generateSortingComponents = (count) => {
    return Array.from({ length: count }, (_, index) => {
      const randomHeight = Math.floor(Math.random() * 300) + 50;
      return {
        height: randomHeight,
        key: index,
        originalIndex: index,
        currentPosition: index,
        isComparing: false,
        isSwapping: false,
      };
    });
  };
  const handleSort = async (sortFunction) => {
    setIsSorting(true);
    await sortFunction(sortingComponents, setSortingComponents);
    setIsSorting(false);
  };

  const handleQuickSort = () =>{
    handleSort(QuickSorting);
  }
  const handleMergeSort =()=>{
    handleSort(MergeSorting);
  }
  const handleBubbleSort = () =>{
    handleSort(bubbleSorting);
  }

  const handleSelectionSort = () =>{
    handleSort(SelectionSorting);
  }

  const handleInsertionSort = () =>{
    handleSort(InsertionSorting);
  }

  const handleDiffSort =()=>{
    if (isMergeSort){
      return ()=> handleMergeSort(MergeSorting);
    }
    else if (isBubbleSort){
      return () => handleBubbleSort(bubbleSorting);
    }
    else if (isQuickSort){
      return () => handleQuickSort(QuickSorting);
    }
    else if (isSelectionSort){
      return () => handleSelectionSort(SelectionSorting);
    }
    else if (isInsertionSort){
      return () => handleInsertionSort(InsertionSorting);
    }
    return ()=>{}
  }
  const handleButtonClick = () => {
    if (isMergeSort){
      setCode(mergeSortCCode)
    }
    else if(isQuickSort){
      setCode(quickSortCCode);
    }
    else if(isBubbleSort){
      setCode(bubbleSortCCode);
    }
    else if(isSelectionSort){
      setCode(selectionSortCCode);
    }
    else{
      setCode(insertionSortCCode);
    }
    setActivateBtn(1);
  };
  const handleButtonClick2 = () => {
    if (isMergeSort){
      setCode(mergeSortCPPCode)
    }
    else if(isQuickSort){
      setCode(quickSortCPPCode);
    }
    else if(isBubbleSort){
      setCode(bubbleSortCPPCode);
    }
    else if(isSelectionSort){
      setCode(selectionSortCPPCode);
    }
    else{
      setCode(insertionSortCPPCode);
    }
    setActivateBtn(2);
  };
  const handleButtonClick3 = () => {
    if (isMergeSort){
      setCode(mergeSortJavaCode)
    }
    else if(isQuickSort){
      setCode(quickSortJavaCode);
    }
    else if(isBubbleSort){
      setCode(bubbleSortJavaCode);
    }
    else if(isSelectionSort){
      setCode(selectionSortJavaCode);
    }
    else{
      setCode(insertionSortJavaCode);
    }
    setActivateBtn(3);
  };
  const handleButtonClick4 = () => {
    if (isMergeSort){
      setCode(mergeSortJSCode)
    }
    else if(isQuickSort){
      setCode(quickSortJSCode);
    }
    else if(isBubbleSort){
      setCode(bubbleSortJSCode);
    }
    else if(isSelectionSort){
      setCode(selectionSortJSCode);
    }
    else{
      setCode(insertionSortJSCode);
    }
    setActivateBtn(4);
  };
  const handleButtonClick5 = () => {
    if (isMergeSort){
      setCode(mergeSortPCode)
    }
    else if(isQuickSort){
      setCode(quickSortPCode);
    }
    else if(isBubbleSort){
      setCode(bubbleSortPCode);
    }
    else if(isSelectionSort){
      setCode(selectionSortPCode);
    }
    else{
      setCode(insertionSortPCode);
    }
    setActivateBtn(5);
  };

  useEffect(() => {
    setBars(10)
    const defaultSortingComponents = generateSortingComponents(10);
    setSortingComponents(defaultSortingComponents);
  }, [location]);

  useEffect(() => {
    const path= location.pathname;
    switch(path){
      case '/quicksort':
        setCode(quickSortCCode);
        break;
      case '/mergesort':
        setCode(mergeSortCCode);
        break;
      case '/bubblesort':
        setCode(bubbleSortCCode);
        break;
      case '/selectionsort':
        setCode(selectionSortCCode);
        break;
      case '/insertionsort':
        setCode(insertionSortCCode);
        break;
      default:
        setCode('');
    }
  },[location.pathname])
  

  return (
    <>
    <div>
      <div id='box'>
        <div className='title quick-init quick-animate' data-aos="fade-down" >{getTitle()}</div>
        <div className='quick-sorting-element'>
          <button type="button" className="sort-btn" onClick={handleNewArrayClick} >
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="white" className="bi bi-shuffle sort-icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"/>
              <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"/>
            </svg>
          </button>
          <button type="button" className='sort-btn' onClick={handleDiffSort()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="white" class="bi bi-play-fill sort-icon" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
            </svg>
          </button>
          <div className='slider-container'>
            <div className='no-bar'>
              Number of Bars:
              <span className='bar-span'>{bars}</span>
              <br />
            </div>
            <input
            type="range"
            value={bars}
            min="10"
            max="80"
            step="5"
            name='item-num'
            className="form-range"
            id="customRange1"
            onChange={handleBarChange}
            disabled={isSorting}  
          />
          </div>
        </div>
        <div className='bar-container'>
          <div id='sort-container' >
            {sortingComponents.map((component, index) => {

              const containerWidth = window.innerWidth -100; 
              const numberOfBars = sortingComponents.length;
              const barWidth = numberOfBars <= 20
              ? 10  
              : Math.max(containerWidth / numberOfBars - 2, 5); 

              return (
                <div
                  key={component.key}
                  className='bar'
                  style={{
                    height: `${component.height}px`,
                    width: `${barWidth}px`,  
                    marginLeft: '1px',
                    background: component.isComparing 
                      ? 'red' 
                      : component.isSwapping 
                      ? 'green' 
                      : 'linear-gradient(0deg, rgba(22, 22, 22, 1) 5%, rgba(210, 210, 210, 1) 100%)',
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
    <div id='quick-description'>
      <div className='info'>
        <div className='description-quick'>
          <div className='description-header'>
            DESCRIPTION
          </div>
          <p>
            {isMergeSort ? 
              'Merge sort is a sorting algorithm that follows the divide-and-conquer approach. It works by recursively dividing the input array into smaller subarrays and sorting those subarrays then merging them back together to obtain the sorted array.'
              : isQuickSort ?
              'QuickSort is a sorting algorithm based on the Divide and Conquer that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.'
              : isBubbleSort ?
              'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.'
              : isSelectionSort ?
              'Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.'
              : isInsertionSort ?
              ' Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is a stable sorting algorithm, meaning that elements with equal values maintain their relative order in the sorted output.'
              :
              ""
            }
          </p>
          <p>
            {isMergeSort ? 
              'In simple terms, we can say that the process of merge sort is to divide the array into two halves, sort each half, and then merge the sorted halves back together. This process is repeated until the entire array is sorted.'
              : isQuickSort ?
              'QuickSort works on the principle of divide and conquer, breaking down the problem into smaller sub-problems.'
              : isBubbleSort ?
              'Bubble Sort works by repeatedly swapping the adjacent elements if they are in the wrong order.'
              : isInsertionSort ?
              'It is considered an ” in-place ” sorting algorithm, meaning it doesn’t require any additional memory space beyond the original array.'
              :
              ""
            }
          </p>
          <p>
            {isMergeSort ? 
              'Here’s a step-by-step explanation of how merge sort works:'
              : isQuickSort ?
              'There are mainly three steps in the algorithm:'
              : isInsertionSort?
              'To achieve insertion sort, follow these steps:'
              :
              ''
            }
          </p>
          {isBubbleSort && (
            <h3 className='description-header' style={{marginLeft:'5.3%'}}>Advantages of Bubble Sort:</h3>
          )} 
          <ol className='ml-[10px]'>
            <li>
              <span style={{color:"#d17f3f"}}>1.</span>
              <span style={{color:"#d17f3f", fontWeight:"bold"}}>
                
                {isMergeSort ? 
                  ' Divide:'
                  : 
                  isQuickSort?
                  ' Choose a Pivot:'
                  :
                  ''
                }
              </span> 
              {isMergeSort ?
                ' Divide the list or array recursively into two halves until it can no more be divided.'
                : isQuickSort ?
                ' Select an element from the array as the pivot. The choice of pivot can vary (e.g., first element, last element, random element, or median). '
                : isBubbleSort ?
                ' Bubble sort is easy to understand and implement.'
                : isSelectionSort ?
                ' First we find the smallest element and swap it with the first element. This way we get the smallest element at its correct position.'
                : isInsertionSort ?
                ' We start with second element of the array as first element in the array is assumed to be sorted.'
                :
                ''
              }
            </li><br />
            <li>
            <span style={{color:"#d17f3f"}}>2.</span>
              <span style={{color:"#d17f3f", fontWeight:"bold"}}>
                 
                {isMergeSort ? 
                ' Conquer:'
                :
                isQuickSort ?
                ' Partition the Array:'
                :
                ''
                } 
              </span> 
              {isMergeSort ?
                ' Each subarray is sorted individually using the merge sort algorithm.'
                : isQuickSort ?
                ' Rearrange the array around the pivot. After partitioning, all elements smaller than the pivot will be on its left, and all elements greater than the pivot will be on its right. The pivot is then in its correct position, and we obtain the index of the pivot.'
                : isBubbleSort ?
                ' It does not require any additional memory space.'
                : isSelectionSort ?
                ' Then we find the smallest among remaining elements (or second smallest) and move it to its correct position by swapping.'
                : isInsertionSort ?
                ' Compare second element with the first element and check if the second element is smaller then swap them.'
                :
                ''
              }
            </li><br />
            <li>
              <span style={{color:"#d17f3f"}}>3.</span>
              <span style={{color:"#d17f3f", fontWeight:"bold"}}>
                
                {isMergeSort ? 
                  ' Merge:'
                  : isQuickSort ?
                  ' Recursively Call:'
                  :
                  ''
                }
              </span> 
              {isMergeSort ? 
                ' The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged.'
                : isQuickSort ?
                ' Recursively apply the same process to the two partitioned sub-arrays (left and right of the pivot).'
                : isBubbleSort ?
                ' It is a stable sorting algorithm, meaning that elements with the same key value maintain their relative order in the sorted output.'
                : isSelectionSort ?
                'We keep doing this until we get all elements moved to correct position.'
                : isInsertionSort ?
                ' Move to the third element and compare it with the second element, then the first element and swap as necessary to put it in the correct position among the first three elements.'
                :
                ''
              }
            </li><br />
            {isInsertionSort && (
              <>
              <li>
                <span style={{color:"#d17f3f"}}>4. </span>
                Continue this process, comparing each element with the ones before it and swapping as needed to place it in the correct position among the sorted elements.
              </li> <br />
              <li>
                <span style={{color:"#d17f3f"}}>5. </span>
                Repeat until the entire array is sorted.
              </li>
              </>
            )}
            {!isMergeSort && !isBubbleSort && !isSelectionSort && !isInsertionSort &&(
              <li> 
                <span style={{color:"#d17f3f"}}>4.</span>
                <span style={{color:"#d17f3f", fontWeight:"bold"}}> Base Case: </span>
                 The recursion stops when there is only one element left in the sub-array, as a single element is already sorted.
              </li>
            )}
            
          </ol>
          {isBubbleSort && (
            <>
            <h3 className='description-header' style={{marginLeft:"5.3%"}}>Disadvantages of Bubble Sort:</h3>
            <ol style={{marginLeft:"1%"}}>
              <li>
                <span style={{color:"#d17f3f", fontWeight:"bold"}}>
                  1. Bubble sort 
                </span> has a time complexity of O(n2) which makes it very slow for large data sets.
              </li> <br />
              <li>
                <span style={{color:"#d17f3f", fontWeight:"bold"}}>
                  2. Bubble sort
                </span> is a comparison-based sorting algorithm, which means that it requires a comparison operator to determine the relative order of elements in the input data set. It can limit the efficiency of the algorithm in certain cases.
              </li>
            </ol>
          </>
          )}
          
        </div>
        <div className='table-box'>
          <div className='table-header' style={{color:"#d17f3f"}}>COMPLEXITY ANALYSIS OF {getTitle()}</div>
          <table className='complex-table' data-aos="flip-left">
            <tbody>
              <tr>
                <th>Average Complexity</th>
                {isMergeSort ? 
                <td>O( n x log n )</td>
                : isQuickSort ?
                <td>O( n x log n )</td>
                : isBubbleSort ?
                <td>O( n<sup style={{fontSize:"12px"}}>2 </sup> ) </td>
                : isSelectionSort ?
                <td>O( n<sup style={{fontSize:"12px"}}>2 </sup> ) </td>
                : isInsertionSort ?
                <td>O( n<sup style={{fontSize:"12px"}}>2 </sup> ) </td>
                :
                ''
                }
              </tr>
              <tr>
                <th>Best Case</th>
                {isMergeSort ? 
                <td>O( n x log n )</td>
                : isQuickSort ?
                <td>O( n x log n )</td>
                : isBubbleSort ?
                <td>O( n<sup style={{fontSize:"12px"}}>2 </sup> ) </td>
                : isSelectionSort ?
                <td>O( n<sup style={{fontSize:"12px"}}>2 </sup> ) </td>
                : isInsertionSort ?
                <td>O( n )</td>
                :
                ''
                }
              </tr>
              <tr>
                <th>Worst Case</th>
                {isMergeSort ? 
                <td>O( n x log n )</td>
                : isQuickSort ?
                <td>O( n<sup style={{fontSize:"12px"}}>2 </sup> ) </td>
                : isBubbleSort ?
                <td>O( n<sup style={{fontSize:"12px"}}>2 </sup> ) </td>
                : isSelectionSort ?
                <td>O( n<sup style={{fontSize:"12px"}}>2 </sup> ) </td>
                : isInsertionSort ?
                <td>O( n<sup style={{fontSize:"12px"}}>2 </sup> ) </td>
                : 
                ''
                }
              </tr>
              <tr>
                <th>Space Complexity</th>
                {isMergeSort ? 
                <td>O( n )</td>
                : isQuickSort ?
                <td>O( n )</td>
                : isBubbleSort ?
                <td>O( 1 )</td>
                :
                isSelectionSort ?
                <td>O( 1 )</td>
                :
                isInsertionSort ?
                <td>O( 1 )</td>
                :
                ''
                }
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='code-box '>
        <div className='code-header' style={{color:"#d17f3f"}}>
          IMPLEMENTATIONS
        </div>
        <div className='menu-code aos-init aos-animate' data-aos="fade-right">
          <div className='menu-btn'>
            <button className={ activateBTN ===1 ? 'menu-btn-activate active':'menu-btn-act'} onClick={handleButtonClick}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" fill-rule="evenodd" clip-rule="evenodd">
                <path fill="#283593" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"/>
                <path fill="#5c6bc0" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"/>
                <path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"/>
                <path fill="#3949ab" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"/>
              </svg>
            </button>
            <button className={ activateBTN ===2 ? 'menu-btn-activate active':'menu-btn-act'} onClick={handleButtonClick2}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" fill-rule="evenodd" clip-rule="evenodd">
                <path fill="#00549d" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"/>
                <path fill="#0086d4" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"/>
                <path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"/>
                <path fill="#0075c0" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"/>
                <path fill="#fff" fill-rule="evenodd" d="M31 21H33V27H31zM38 21H40V27H38z" clip-rule="evenodd"/>
                <path fill="#fff" fill-rule="evenodd" d="M29 23H35V25H29zM36 23H42V25H36z" clip-rule="evenodd"/>
              </svg>
            </button>
            <button className={ activateBTN ===3 ? 'menu-btn-activate active':'menu-btn-act'} onClick={handleButtonClick3}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px">
                <path fill="#d43a02" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999	c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"/>
                <path fill="#d43a02" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743	s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"/>
                <linearGradient id="P9ujQJgz7XN9Qbny9S64Ha" x1="22.677" x2="30.737" y1="21.174" y2="43.318" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#5c65d6"/>
                  <stop offset=".999" stop-color="#464eb0"/>
                </linearGradient>
                <path fill="url(#P9ujQJgz7XN9Qbny9S64Ha)" d="M32.084,25.055c1.754-0.394,3.233,0.723,3.233,2.01c0,2.901-4.021,5.643-4.021,5.643 s6.225-0.742,6.225-5.505C37.521,24.053,34.464,23.266,32.084,25.055z M29.129,27.395c0,0,1.941-1.383,2.458-1.902 c-4.763,1.011-15.638,1.147-15.638,0.269c0-0.809,3.507-1.638,3.507-1.638s-7.773-0.112-7.773,2.181 C11.683,28.695,21.858,28.866,29.129,27.395z"/>
                <linearGradient id="P9ujQJgz7XN9Qbny9S64Hb" x1="19.498" x2="27.296" y1="22.77" y2="44.196" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#5c65d6"/>
                  <stop offset=".999" stop-color="#464eb0"/>
                </linearGradient>
                <path fill="url(#P9ujQJgz7XN9Qbny9S64Hb)" d="M27.935,29.571 c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"/>
                <linearGradient id="P9ujQJgz7XN9Qbny9S64Hc" x1="18.698" x2="26.59" y1="23.455" y2="45.14" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#5c65d6"/>
                  <stop offset=".999" stop-color="#464eb0"/>
                </linearGradient>
                <path fill="url(#P9ujQJgz7XN9Qbny9S64Hc)" d="M18.686,32.739 c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"/>
                <linearGradient id="P9ujQJgz7XN9Qbny9S64Hd" x1="18.03" x2="25.861" y1="24.198" y2="45.712" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#5c65d6"/>
                  <stop offset=".999" stop-color="#464eb0"/>
                </linearGradient>
                <path fill="url(#P9ujQJgz7XN9Qbny9S64Hd)" d="M36.281,36.632 c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839 C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"/>
                <linearGradient id="P9ujQJgz7XN9Qbny9S64He" x1="20.725" x2="28.228" y1="24.582" y2="45.197" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#5c65d6"/>
                  <stop offset=".999" stop-color="#464eb0"/>
                </linearGradient>
                <path fill="url(#P9ujQJgz7XN9Qbny9S64He)" d="M39,38.604 c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"/>
              </svg>
            </button>
            <button className={ activateBTN ===4 ? 'menu-btn-activate active':'menu-btn-act'} onClick={handleButtonClick4}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px">
                <path fill="#ffd600" d="M6,42V6h36v36H6z"/>
                <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/>
              </svg>
            </button>
            <button className={ activateBTN ===5 ? 'menu-btn-activate active':'menu-btn-act'} onClick={handleButtonClick5}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px">
                <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"/>
                <path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"/>
              </svg>
            </button>
          </div>
          <div className='code-content'>
            <pre>
              <code className='code dif-code'>
                {code}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default QuickSort;
