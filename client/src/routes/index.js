import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthRoute from './AuthRoute';

const UserLayout = lazy(() => import('../screens/User/UserLayout'));
const SignIn = lazy(() => import('../screens/User/SignIn'));
const ForgotPassword = lazy(() => import('../screens/User/ForgotPassword'));
const ResetPassword = lazy(() => import('../screens/User/ResetPassword'));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/*" element={<UserLayout />} />

        <Route path="/signin" element={<AuthRoute component={<SignIn />} />} />
        <Route
          path="/forgot-password"
          element={<AuthRoute component={<ForgotPassword />} />}
        />
        <Route
          path="/reset-password/:token"
          element={<AuthRoute component={<ResetPassword />} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
