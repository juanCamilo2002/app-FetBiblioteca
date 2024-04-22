import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ViewBook from './pages/ViewBook/ViewBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/viewbook' element={<ViewBook/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

