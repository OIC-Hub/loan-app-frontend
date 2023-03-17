import './App.css';
import {BrowserRouter,Route,Routes} from 'react-dom'
import Navbar  from './components/common/Navbar';


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
