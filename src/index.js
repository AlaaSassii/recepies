import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import recepiesReducers from './states/recepiesSlice'
import userSlice from './states/userSlice';
import accountSlice from './states/accountsSlice' ; 
const store = configureStore({
  reducer: { 
    recipe : recepiesReducers , 
    user : userSlice , 
    accounts : accountSlice , 
    
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

