import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Users = lazy(() => import('../screens/Admin/Users'));
const WithdrawRequests = lazy(() =>
  import('../screens/Admin/WithdrawRequests')
);
const LinkAccountRequests = lazy(() =>
  import('../screens/Admin/LinkAccountRequests')
);

const UserRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/users/*"
          element={<ProtectedRoute component={<Users />} type="admin" />}
        />
        <Route
          path="/withdraw-requests"
          element={
            <ProtectedRoute component={<WithdrawRequests />} type="admin" />
          }
        />
        <Route
          path="/link-account-requests"
          element={
            <ProtectedRoute component={<LinkAccountRequests />} type="admin" />
          }
        />

        <Route path="*" element={<Navigate to="/admin/users" />} />
      </Routes>
    </Suspense>
  );
};

export default UserRouter;
