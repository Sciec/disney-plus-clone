import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header.js';
import Login from './components/Login.js';
import Home from './components/Home.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
              
        </Routes> 
      </Router> 

    </div>
  );
}

export default App;
