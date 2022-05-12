import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthRoute from './AuthRoute';

const UserLayout = lazy(() => import('../screens/User/UserLayout'));
const AdminLayout = lazy(() => import('../screens/Admin/AdminLayout'));
const AdminSignIn = lazy(() => import('../screens/Admin/SignIn'));
const SignIn = lazy(() => import('../screens/User/SignIn'));
const ForgotPassword = lazy(() => import('../screens/User/ForgotPassword'));
const ResetPassword = lazy(() => import('../screens/User/ResetPassword'));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/*" element={<UserLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route
          path="admin/signin"
          element={<AuthRoute component={<AdminSignIn />} type="admin" />}
        />

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
