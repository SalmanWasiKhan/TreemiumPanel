import { useContext, createContext, useEffect, useState } from 'react';
import { AuthAPI } from '../api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const _login = AuthAPI.login;

  const login = (user, onSuccess) => {
    _login(user)
      .then((res) => {
        if (onSuccess) onSuccess();

        localStorage.setItem('token', res.token);

        const userData = res.user;
        setUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = (onSuccess) => {
    localStorage.removeItem('token');
    setUser(null);
    if (onSuccess) onSuccess();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && token) {
      setUser(user);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    const listener = (event) => {
      if (event.key === 'token') {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && token) {
          setUser(user);
        } else {
          setUser(null);
        }
      }
    };

    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoggedIn: !!user,
        isAdmin: user?.role === 'admin',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const { user, login, logout, isLoggedIn, isAdmin } = useContext(AuthContext);

  return {
    user,
    login,
    logout,
    isLoggedIn,
    isAdmin,
  };
};

export { AuthProvider, useAuth };
