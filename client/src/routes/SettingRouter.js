import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const EditProfile = lazy(() => import('../screens/User/Setting/EditProfile'));
const Preferences = lazy(() => import('../screens/User/Setting/Preferences'));
const LinkedAccounts = lazy(() =>
  import('../screens/User/Setting/LinkedAccounts')
);

const SettingRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute component={<EditProfile />} />}
        />
        <Route
          path="/preferences"
          element={<ProtectedRoute component={<Preferences />} />}
        />
        <Route
          path="/linked-accounts"
          element={<ProtectedRoute component={<LinkedAccounts />} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default SettingRouter;
