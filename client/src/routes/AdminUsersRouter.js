import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const ListUsers = lazy(() => import('../screens/Admin/Users/ListUsers'));
const ViewProfile = lazy(() => import('../screens/Admin/Users/ViewProfile'));
const AddUser = lazy(() => import('../screens/Admin/Users/AddUser'));
const EditProfile = lazy(() => import('../screens/Admin/Users/EditProfile'));

const AdminUsersRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute component={<ListUsers />} />}
        />
        <Route
          path="/:id"
          element={<ProtectedRoute component={<ViewProfile />} />}
        />
        <Route
          path="/add"
          element={<ProtectedRoute component={<AddUser />} />}
        />
        <Route
          path="/:id/edit"
          element={<ProtectedRoute component={<EditProfile />} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AdminUsersRouter;
