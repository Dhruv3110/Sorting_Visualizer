import React from 'react'
const HomePage_Content = ({onGetStarted}) => {
  return (
    <div>
      <div className='content'>
          <span className='first-header'>SORT</span>
          <span className='second-header'>VISUALIZER</span>
      </div>
      <div className='description'>
        <div className='description-box'>
          <h2 style={{color:"#d17f3f"}}>Sorting Algorithm</h2>
          <div className='description-content'>
            <p>A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure.</p>
            <p><span  style={{color:"#d17f3f",fontFamily:'Electrolize, Courier, monospace', fontWeight:'bold'}}> What is Sorting? </span><br />
            Sorting refers to rearrangement of a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure. Sorting means reordering of all the elements either in ascending or in descending order.</p>
            <p>The efficiency of any sorting algorithm is determined by the time complexity and space complexity of the algorithm.</p>
            <ol>
              <li>
                <p>
                  <span className='font-bold' style={{color:"#d17f3f",fontFamily:'Electrolize, Courier, monospace'}}>
                    1. Time Complexity:
                  </span> Time complexity refers to the time taken by an algorithm to complete its execution with respect to the size of the input. It can be represented in different forms:
                  <ul style={{fontFamily:'Electrolize, Courier, monospace'}}>
                    <li>Big-O notation:
                      <span className='symbol' style={{color:"#d17f3f"}}> O</span>
                    </li>
                    <li>Big-Ω notation:
                      <span className='symbol' style={{color:"#d17f3f"}}> Ω</span>
                    </li>
                    <li>Big-Θ notation:
                      <span className='symbol' style={{color:"#d17f3f"}}> Θ</span>
                    </li>
                  </ul>
                  <br />
                </p>
              </li>
              <li>
                <p>
                  <span className='font-bold' style={{color:"#d17f3f",fontFamily:'Electrolize, Courier, monospace'}}>2. Space Complexity:</span> Space complexity refers to the total amount of memory used by the algorithm for a complete execution. It includes both the auxiliary memory and the input.
                </p>
                <p>The auxiliary memory is the additional space occupied by the algorithm apart from the input data. Usually, auxiliary memory is considered for calculating the space complexity of an algorithm.</p>
              </li>
            </ol>
            <button className='ripple-sort-btn' onClick={onGetStarted}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage_Content
