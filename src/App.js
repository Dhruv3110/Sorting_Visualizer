import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home_Page from './Modules/Home_Page';
import QuickSort from './components/QuickSort';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home_Page/>}>
            <Route path="/quicksort" element={<QuickSort/>}/>
            <Route path='/mergesort' element={<QuickSort/>}/>
            <Route path='/bubblesort' element={<QuickSort/>}/>
            <Route path='/selectionsort' element={<QuickSort/>}/>
            <Route path='/insertionsort' element={<QuickSort/>}/>
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
