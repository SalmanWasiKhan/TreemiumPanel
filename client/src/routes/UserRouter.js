import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Account = lazy(() => import('../screens/User/Account'));
const Setting = lazy(() => import('../screens/User/Setting'));
const AddAccount = lazy(() => import('../screens/User/AddAccount'));
const EditAccount = lazy(() => import('../screens/User/EditAccount'));

const UserRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ProtectedRoute component={<Account />} />} />
        <Route
          path="/setting/*"
          element={<ProtectedRoute component={<Setting />} />}
        />
        <Route
          path="/add-bank-account"
          element={<ProtectedRoute component={<AddAccount />} />}
        />
        <Route
          path="/edit-bank-account/:id"
          element={<ProtectedRoute component={<EditAccount />} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default UserRouter;
