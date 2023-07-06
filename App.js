import './App.css';
import Hero from './pages/home/hero'
import Login from './pages/home/login/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/home/dashboard/Dashboard.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;