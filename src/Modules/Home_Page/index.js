import React, {useState, useEffect, useRef} from 'react'
import './home.css'
import HomePage_Content from '../../components/Home_Content'
import {Routes, Route, NavLink} from 'react-router-dom';
import QuickSort from '../../components/QuickSort'
const Home_Page = () => {
  const [isSidenavVisible, setSidenavVisible] = useState(false);
  const sidenavRef = useRef(null);
  const toggleSidenav = () => {
    setSidenavVisible(!isSidenavVisible);
  };
  const handleClickOutside = (event) => {
    if (sidenavRef.current && !sidenavRef.current.contains(event.target)) {
      setSidenavVisible(false);
    }
  };

  const scrollToTopAndOpenSidenav = () =>{
    const scrollDuration= 500;
    const scrollStep = -window.scrollY / (scrollDuration / 16);
    const smoothScroll =() =>{
      if(window.scrollY !==0){
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(smoothScroll);
      }
      else{
        setTimeout(()=>{
          setSidenavVisible(true);
        },500)
      }
    }
    requestAnimationFrame(smoothScroll);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeSidenav = () => {
    setSidenavVisible(false);
  };
  return (
    <div>
      <nav className="navbar">
        <div className='navbar-box'>
          <div>
            <button 
              className="btn btn-sm ripple navbar-element sidenav-btn open" 
              type="button" 
              onClick={toggleSidenav}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="orange" className="bi bi-list sidenav-btn-icon icon" viewBox="0 0 15 15">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
            </button>
          </div>
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">SORT VISUALIZER</NavLink>
          </div>
        </div>
        <div 
          className={`sidenav ${isSidenavVisible ? 'show' : ''}`}
          ref={sidenavRef}
          id='sidenav'
        >
          <NavLink 
            className="sidenav-title no-remove" 
            to ="/" 
            onClick={closeSidenav}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="orange" className="bi bi-house-door-fill home-btn" viewBox="0 0 16 16">
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
            </svg>
            <span style={{marginLeft:'5px'}}>Home</span>
          </NavLink>
          <div className='sep no-remove'></div>
          <div className='algo-title'>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="orange" className="bi bi-filter-left" viewBox="0 0 16 16">
              <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
            </svg>
            <span style={{marginLeft:'5px'}}>Algorithms</span>
          </div>
          <div className="">
            <NavLink to="/quicksort" className='sidenav-element no-remove' onClick={closeSidenav}>Quick Sort</NavLink>
            <NavLink to="/mergesort" className='sidenav-element no-remove' onClick={closeSidenav}>Merge Sort</NavLink>
            <NavLink to="/bubblesort" className='sidenav-element no-remove' onClick={closeSidenav}>Bubble Sort</NavLink>
            <NavLink to="/selectionsort" className='sidenav-element no-remove' onClick={closeSidenav}>Selection Sort</NavLink>
            <NavLink to="/insertionsort" className='sidenav-element no-remove' onClick={closeSidenav}>Insertion Sort</NavLink>
          </div>
        </div>
      </nav>
        <Routes>
          <Route path="/" element={<HomePage_Content onGetStarted= {scrollToTopAndOpenSidenav} />} />
          <Route path="/quicksort" element={<QuickSort />} />
          <Route path="/mergesort" element={<QuickSort />} />
          <Route path="/bubblesort" element={<QuickSort />} />
          <Route path="/selectionsort" element={<QuickSort />} />
          <Route path="/insertionsort" element={<QuickSort />} />
        </Routes>
      <footer className='footer'>
        <div className='footer-container '> 
          <div className='footer-content'>
            <div className='footer-title'>Contacts:</div>
            <div 
              className='footer-email' 
              style={{cursor:'pointer'}}
              onClick={() =>{
                navigator.clipboard.writeText('dhruvgupta.dg31@gmail.com')
                alert('Email copied to clipboard')
              }}
            >
              <span className='email'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#d17f3f" class="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg> <div className='w-[10px]'></div>
              dhruvgupta.dg31@gmail.com
              </span>
            </div>
            <div className='footer-github'>
              <a className='github 'href='https://github.com/Dhruv3110'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#d17f3f" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg> <div className='w-[10px]'></div>Github/Dhruv Gupta
              </a>
            </div>
            <div className='footer-linkedin'>
              <a className='linkedin' href='https://www.linkedin.com/in/dhruv-gupta-794968244/'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#d17f3f" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg> <div className='w-[10px]'></div>LinkedIN
              </a>
            </div>
            <div 
              className='footer-phone' 
              style={{marginLeft:"15px", cursor:'pointer'}}
              onClick={() => {
                navigator.clipboard.writeText('+91 8383075665');
                alert('Phone number copied to clipboard!');
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#d17f3f" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
              </svg>
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              <span className='phone'>+91 8383075665</span>
            </div>
          </div>
          <div className='footer-references'>
            <div className='footer-title'>References:</div>
              <div className='footer-programiz'>
                <a className='programiz' href='https://www.programiz.com/dsa/sorting-algorithm'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 300 301">
                  <path fill="url(#a)" d="M89 124.484a5.78 5.78 0 0 1 2.875-4.997l37.783-21.953c1.927-1.119 4.342.27 4.342 2.499v158.979a2 2 0 0 1-2 2H91a2 2 0 0 1-2-2V124.484z"/>
                  <path fill="url(#b)" d="M89 117.945a2 2 0 0 1 .999-1.732l41-23.7c1.333-.771 3.001.19 3.001 1.73v81.769a3 3 0 0 1-3 3H92a3 3 0 0 1-3-3v-58.067z"/>
                  <path fill="url(#c)" d="M202.699 90.088L93.016 153.066A7.998 7.998 0 0 0 89 160.003v46.76l118.687-68.526a8 8 0 0 0 4-6.928V95.292c0-4.613-4.988-7.5-8.988-5.204z"/>
                  <path fill="#6501E5" fillRule="evenodd" d="M93.835 203.978A9.185 9.185 0 0 0 89 212.055v-10.819l4.835 2.742zM89 212.085v.053-.053z" clipRule="evenodd"/>
                  <path fill="#9327FE" fillRule="evenodd" d="M207.415 138.398a7.97 7.97 0 0 0 .619-3.091c0-1.702-.531-3.28-1.438-4.577l5.115-2.895v3.463a8 8 0 0 1-3.995 6.926l-.301.174z" clipRule="evenodd"/>
                  <path fill="#9327FE" d="M206.665 130.868c-1.371-4.216-71.707-51.465-120.12-84.196-1.633-1.104-.842-3.649 1.13-3.649h57.659a2 2 0 0 1 1.135.353l61.788 42.628a7.999 7.999 0 0 1 3.457 6.585v35.344l-5.049 2.935z"/>
                  <defs>
                    <linearGradient id="a" x1="111.5" x2="111.5" y1="243.76" y2="167.84" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00A3FF"/>
                      <stop offset="1" stop-color="#0597EA"/>
                    </linearGradient>
                    <linearGradient id="b" x1="111.5" x2="111.5" y1="170.28" y2="131.87" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00A3FF"/>
                      <stop offset="1" stop-color="#0597EA"/>
                    </linearGradient>
                    <linearGradient id="c" x1="127.72" x2="220.07" y1="156.51" y2="104.7" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#6501E5"/>
                      <stop offset="1" stop-color="#5F01D8"/>
                    </linearGradient>
                  </defs>
                </svg> <div className='w-[10px]'></div>
                Programiz
                </a>
              </div>
              <div className='footer-geeks'>
                <a className='geeks' href='https://www.geeksforgeeks.org/'>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="30px" height="30px">
                  <path fill="#43a047" d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,
                  7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9	L43,11c0,0-0.533,1.506-1,
                  1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,
                  25,16.26,25,22.92	c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,
                  23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892	c-2.301,
                  0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,
                  0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10	c0,0.339-0.014,0.671-0.035,
                  1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,
                  4,33c1.269,1.625,3,3,8,3	c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,
                  10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057	C45.014,
                  26.861,45.909,26,46.991,26H48v-2H29.035z M11.477,33.73C9.872,33.73,
                  7.322,33.724,7,32	c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,
                  7.855,26,8.943,26H19C18.206,30.781,15.015,33.73,11.477,33.73z M41,
                  32	c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057c1.088,
                  0,1.975,0.867,2,1.954	C41.091,29.473,41.109,31.417,41,32z"/>
                </svg> <div className='w-[10px]'></div>
                  GeeksforGeeks
                </a>
              </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Home_Page
