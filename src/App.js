import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Details from './Components/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/login' element={<Login/>} />

        <Route path='/detail/:id' element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
