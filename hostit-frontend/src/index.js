
import React from 'react';

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { createStore, combineReducers } from 'redux';

import App from './App';

import reportWebVitals from './reportWebVitals';

import './index.css';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import authReducer from './reducers/authReducer';

import fileReducer from './reducers/fileReducer';
 
const theme = createTheme();
 
const rootReducer = combineReducers({

  auth: authReducer,

  file: fileReducer,

});
 
const store = createStore(rootReducer);
 
const Root = () => (

  <Provider store={store}>

    <ThemeProvider theme={theme}>

      <React.StrictMode>

        <App />

        <ToastContainer />

      </React.StrictMode>

    </ThemeProvider>

  </Provider>

);
 
ReactDOM.render(<Root />, document.getElementById('root'));
 
reportWebVitals();
