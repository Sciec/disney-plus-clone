import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header.js';
import Login from './components/Login.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Login />
      </Router>
    </div>
  );
}

export default App;
