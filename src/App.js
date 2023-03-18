import './App.css';
import { BrowserRouter, Route, Routes } from 'react'
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Dashboard from './components/pages/Dashboard'


function App() {
  return (
    <div className="App">
      <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path='/Dashboard' element= {<Dashboard />} />
          </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
