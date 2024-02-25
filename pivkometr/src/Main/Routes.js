import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../App/main_page';
import Login from '../App/Login/login';
import Register from '../App/Login/register';
import { ItemsProvider } from '../App/items_provider';
import { UserProvider } from '../App/Login/user_context';

const AppRoutes = () => {
  return (
    <Router>
        <ItemsProvider>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </UserProvider>
      </ItemsProvider>
    </Router>
  );
};

export default AppRoutes;
