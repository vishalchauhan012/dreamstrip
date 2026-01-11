import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './features/auth/Login';
import Signup from './features/auth/Signup';
import Dashboard from './features/auth/Dashboard';
import DashMain from './features/auth/DashMain';
import './App.css';
import About from './features/pages/About';
import Home from './features/pages/Home';
import Contact from './features/pages/Contact';
import Explore from './features/pages/Explore';
import MainLayouts from './features/layouts/MainLayouts';



function App() {
  return (
    <Router>

      {/* main layout  */}

      <Routes>
        <Route path="/" element={<MainLayouts/>} >
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/explore" element={<Explore/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login />} />
        
        </Route>
       
   
        <Route path="/signup" element={<Signup />} />
           <Route path="/form" element={<Dashboard />} />
            <Route path="/Dashboard" element={<DashMain />} />
      </Routes>
    </Router>
  );
}

export default App;
