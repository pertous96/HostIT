import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
 
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f2f5;
`;
 
const Form = styled.form`
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
`;
 
const Title = styled.h2`
    margin-bottom: 20px;
    color: #333;
    text-align: center;
`;
 
const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
`;
 
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
 
    &:hover {
        background-color: #45a049;
    }
`;
 
const SwitchLink = styled(Link)`
    display: block;
    margin-top: 10px;
    text-align: center;
    color: #4CAF50;
    text-decoration: none;
 
    &:hover {
        text-decoration: underline;
    }
`;
 
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
 
    const { email, password } = formData;
    const navigate = useNavigate();
 
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
 
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            const token = res.data.token;
            console.log('Token received:', token);
            localStorage.setItem('token', token);
            toast.success('Login successful');
            navigate('/dashboard');
        } catch (err) {
            toast.error('Login failed: ' + (err.response ? err.response.data.msg : 'Server error'));
        }
    };
 
    return (
<LoginContainer>
<Form onSubmit={onSubmit}>
<Title>Login</Title>
<Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Email"
                    required
                />
<Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    placeholder="Password"
                    required
                />
<Button type="submit">Login</Button>
<SwitchLink to="/register">Don't have an account? Register</SwitchLink>
</Form>
</LoginContainer>
    );
};
 
export default Login;