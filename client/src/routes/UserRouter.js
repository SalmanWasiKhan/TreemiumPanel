import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Account = lazy(() => import('../screens/User/Account'));
const Setting = lazy(() => import('../screens/User/Setting'));

const UserRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ProtectedRoute component={<Account />} />} />
        <Route
          path="/setting/*"
          element={<ProtectedRoute component={<Setting />} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default UserRouter;
