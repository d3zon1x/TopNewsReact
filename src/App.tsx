import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import SignIn from './pages/auth/signin';
import SignUp from './pages/auth/signup';
import { useTypedSelector } from "./hooks/useTypedSelector";
import NotFound from "./pages/notFound";
import DashboardLayout from "./container/dashboardLayout";
import DefaultPage from './pages/defaultPage';
import AllUsers from './pages/users/allUsers';
import Register from './pages/auth/register';

function App() {
  const { isAuth, user } = useTypedSelector((store) => store.UserReducer);

  return (
    <Routes>
      {isAuth && (
        <>
          {user.role === "Administrator" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DefaultPage />} />
              <Route path="users" element={<AllUsers />} />
              <Route path="register" element={<Register />} />
            </Route>
          )}
          {user.role === "User" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="users" element={<AllUsers />} />
            </Route>
          )}
        </>
      )}

      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;