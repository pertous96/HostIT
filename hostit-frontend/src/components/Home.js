import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
 
const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f2f5;
`;
 
const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 20px;
    color: #333;
`;
 
const Subtitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 40px;
    color: #555;
`;
 
const Button = styled(Link)`
    padding: 15px 30px;
    margin: 10px;
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1rem;
 
    &:hover {
        background-color: #45a049;
    }
`;
 
const DebugButton = styled.button`
    padding: 15px 30px;
    margin: 10px;
    background-color: #ff5722;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
 
    &:hover {
        background-color: #e64a19;
    }
`;
 
const Home = () => {
    const navigate = useNavigate();
 
    const handleDebugLogin = () => {
        const token = 'your_generated_token_here'; // Remplacez par un token valide pour le débogage
        localStorage.setItem('token', token);
        navigate('/dashboard');
    };
 
    return (
<HomeContainer>
<Title>Welcome to HostIT</Title>
<Subtitle>Your secure file storage solution</Subtitle>
<Button to="/login">Login</Button>
<Button to="/register">Register</Button>
<DebugButton onClick={handleDebugLogin}>Debug Login</DebugButton>
</HomeContainer>
    );
};
 
export default Home;