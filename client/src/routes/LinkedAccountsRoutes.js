import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const ListAccounts = lazy(() =>
  import('../screens/User/Setting/LinkedAccounts/ListAccounts')
);
const AddAccount = lazy(() =>
  import('../screens/User/Setting/LinkedAccounts/AddAccount')
);
const EditAccount = lazy(() =>
  import('../screens/User/Setting/LinkedAccounts/EditAccount')
);

const LinkedAccountsRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute component={<ListAccounts />} />}
        />
        <Route
          path="/add"
          element={<ProtectedRoute component={<AddAccount />} />}
        />
        <Route
          path="/edit/:id"
          element={<ProtectedRoute component={<EditAccount />} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default LinkedAccountsRouter;
