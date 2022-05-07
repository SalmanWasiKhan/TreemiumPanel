import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';

const Account = lazy(() => import('../screens/User/Account'));
const Setting = lazy(() => import('../screens/User/Setting'));
const Login = lazy(() => import('../screens/User/Login'));
const Signup = lazy(() => import('../screens/User/Signup'));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ProtectedRoute component={<Account />} />} />
        <Route
          path="/setting/*"
          element={<ProtectedRoute component={<Setting />} />}
        />
        <Route path="/login" element={<AuthRoute component={<Login />} />} />
        <Route path="/signup" element={<AuthRoute component={<Signup />} />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
