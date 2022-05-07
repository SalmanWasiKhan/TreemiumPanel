import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AuthRoute = ({ component, type = 'user' }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return component;
  }

  if (type === 'user') {
    return <Navigate to="/" />;
  } else if (type === 'admin') {
    return <Navigate to="/admin" />;
  }
};

export default AuthRoute;
