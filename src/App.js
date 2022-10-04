import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './compontents/Home/Home';
import NavBar from './compontents/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>
    </div>
  );
}

export default App;
