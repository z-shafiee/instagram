import { useState } from 'react';  
import { useAuth } from '../context/AuthContext';  

const useAuthHook = () => {  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);  
  const authContext = useAuth();  

  const handleLogin = async (email, password) => {  
    setLoading(true);  
    try {  
      // Simulate login API call  
      const userData = { email, id: '123' };  
      authContext.login(userData);  
      setLoading(false);  
    } catch (err) {  
      setError(err.message);  
      setLoading(false);  
    }  
  };  

  return {  
    login: handleLogin,  
    loading,  
    error  
  };  
};  

export default useAuthHook;