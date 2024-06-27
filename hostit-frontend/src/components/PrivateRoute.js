import React from 'react';
import { Navigate } from 'react-router-dom';
 
const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    console.log('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2NWMyNTk0OWVlNzk0N2JmODJmMjYwIn0sImlhdCI6MTcxNzk0NDkyMSwiZXhwIjoxNzE3OTQ4NTIxfQ.8Pf17mT4oTlaBc4oJEzm_QhGZuvcBOvnrA2_34akcQk', token); // Ajouter un journal pour vérifier le token
 
    const isAuthenticated = !!token;
    return isAuthenticated ? children : <Navigate to="/login" />;
};
 
export default PrivateRoute;