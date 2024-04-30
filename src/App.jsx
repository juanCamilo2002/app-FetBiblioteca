import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ViewBook from './pages/ViewBook/ViewBook';
import AdminLayout from './pages/admin/Layout/AdminLayout';
import Dashboard from './pages/admin/dashboard/Dashboard';
import { AsideProvider } from './context/AsideContext';
import AddBook from './pages/admin/AddBook/AddBook';
import UpdateBook from './pages/admin/UpdateBook/UpdateBook';
import Book from './pages/admin/books/Book';
import Reservation from './pages/admin/reservations/Reservation';
import User from './pages/admin/users/User';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';



function App() {
  const { user } = useContext(AuthContext);

  return (
    <AsideProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          {/* user routes */}
          <Route index path="/" element={!user?.isAdmin ? <Home /> : <Navigate to={"/admin/dashboard"} />} />
          <Route path='/viewbook' element={!user?.isAdmin ? <ViewBook /> : <Navigate to={"/admin/dashboard"} />} />



          <Route path='/admin' element={user && user.isAdmin ? <AdminLayout /> : <Navigate to={"/login"} />} >
            <Route path='dashboard' index element={<Dashboard />} />
            <Route path='books' index element={<Book />} />
            <Route path='reservations' index element={<Reservation />} />
            <Route path='users' index element={<User />} />
          </Route>


          <Route path='/addbook' element={<AddBook />} />
          <Route path='/updatebook/:id' element={<UpdateBook />} />

         

        </Routes>
      </BrowserRouter>
    </AsideProvider>
  );
}

export default App;

