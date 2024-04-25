import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ViewBook from './pages/ViewBook/ViewBook';
import AddBook from './pages/admin/AddBook/AddBook';
import UpdateBook from './pages/admin/UpdateBook/UpdateBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/viewbook' element={<ViewBook/>}/>
        
        <Route path='/addbook' element={<AddBook/>}/>
        <Route path='/updatebook' element={<UpdateBook/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

