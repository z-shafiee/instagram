


import React, { createContext, useState, useEffect } from 'react';
import { login, register } from '../services/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async (credentials) => {
    const userData = await login(credentials);
    setUser(userData);
  };

  const handleRegister = async (userData) => {
    const newUser = await register(userData);
    setUser(newUser);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleRegister }}>
      {children}
    </AuthContext.Provider>
  );
};
