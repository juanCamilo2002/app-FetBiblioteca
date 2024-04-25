import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ViewBook from './pages/ViewBook/ViewBook';
import AdminLayout from './pages/admin/Layout/AdminLayout';
import Dashboard from './pages/admin/dashboard/Dashboard';
import { AsideProvider } from './context/AsideContext';
import AddBook from './pages/admin/AddBook/AddBook';
import UpdateBook from './pages/admin/UpdateBook/UpdateBook';


function App() {
  return (
    <AsideProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* user routes */}
          <Route index path="/" element={<Home />} />
          <Route path='/viewbook' element={<ViewBook />} />

          {/* admin routes */}
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='dashboard' index element={<Dashboard />} />

          </Route>
          
        <Route path='/addbook' element={<AddBook/>}/>
        <Route path='/updatebook' element={<UpdateBook/>}/>

      </Routes>
      </BrowserRouter>
    </AsideProvider>
  );
}

export default App;

