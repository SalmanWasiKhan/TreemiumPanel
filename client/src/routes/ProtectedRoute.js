import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ component, type = 'user' }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return component;
  }

  if (type === 'user') {
    return <Navigate to="/login" />;
  } else if (type === 'admin') {
    return <Navigate to="/admin/login" />;
  }
};

export default ProtectedRoute;
