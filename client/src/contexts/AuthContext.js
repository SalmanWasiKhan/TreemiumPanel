import { useContext, createContext, useEffect, useState } from 'react';
// import { useMutation } from 'react-query';
// import { AuthAPI } from '../api';
// import { decodeToken } from 'react-jwt';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const { mutate: _login } = useMutation(AuthAPI.login);
  // const { mutate: _logout } = useMutation(AuthAPI.logout);

  const login = (user, onSuccess) => {
    // _login(user, {
    //   onSuccess: (token) => {
    //     if (onSuccess) onSuccess();

    //     localStorage.setItem('token', token);

    //     const decodedToken = decodeToken(token);
    //     setUser(decodedToken);
    //   },
    // });
    localStorage.setItem('token', 'Dummy Token');
    if (onSuccess) onSuccess();
  };

  const logout = (onSuccess) => {
    // _logout(null, {
    //   onSuccess: () => {
    //     localStorage.removeItem('token');
    //     setUser(null);

    //     if (onSuccess) onSuccess();
    //   },
    // });
    localStorage.removeItem('token');
    if (onSuccess) onSuccess();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    // const user = decodeToken(token);
    // if (user) {
    //   setUser(user);
    // }
    if (token) {
      setUser({
        name: 'Test User',
        email: 'user@test.com',
      });
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
        // const user = decodeToken(token);
        // if (user) {
        //   setUser(user);
        // } else {
        //   setUser(null);
        // }
        if (token) {
          setUser({
            name: 'Test User',
            email: 'user@test.com',
          });
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const { user, login, logout, isLoggedIn } = useContext(AuthContext);

  return {
    user,
    login,
    logout,
    isLoggedIn,
  };
};

export { AuthProvider, useAuth };
