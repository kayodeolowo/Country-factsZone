import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Allcountries from './pages/Allcountries';
import Countrydetails from './pages/Countrydetails';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Allcountries />} />
        <Route path='/countrydetails' element={<Countrydetails />} />
      </Routes>
    </Router>
  );
}

export default App;
