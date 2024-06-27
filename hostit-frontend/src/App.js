import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const App = () => {
    return (
<Router>
<div className="App">
<ToastContainer />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
</Routes>
</div>
</Router>
    );
};
 
export default App;