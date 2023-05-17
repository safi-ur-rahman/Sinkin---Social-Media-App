import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './homepage.js';
import Login from './login.js';
import Profile from './profile';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
