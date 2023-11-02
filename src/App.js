import './index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Allcountries from './pages/Allcountries';
import Countrydetails from './pages/Countrydetails';




function App() {
  return (
    <Router>
      
        <Routes> 
          
           <Route path='/countrydetails' element= {<Countrydetails/>}/>
           
             <Route path='/' element= {<Allcountries/>}/>
           
            
        </Routes> 
        

    </Router>
  );
}

export default App;
