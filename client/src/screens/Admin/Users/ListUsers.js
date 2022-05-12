import { useState, useEffect } from 'react';
import UsersTable from '../../../components/Admin/Users/ListUsers/UsersTable';
import { useNavigate } from 'react-router-dom';
import useSearchParams from '../../../hooks/useSearchParams';
import { UserAPI } from '../../../api';

const ListUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const { search } = useSearchParams();
  const currentPage = parseInt(search.page, 10) || 1;
  const perPage = 10;

  const getUsers = async () => {
    setLoading(true);
    UserAPI.getUsers({ page: currentPage, limit: perPage }).then(
      ({ users, totalPages }) => {
        setUsers(users);
        setTotalPages(totalPages);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return (
    <div className="max-h-[85vh] overflow-auto py-5">
      <div className="mx-auto max-w-lg px-4 md:max-w-6xl">
        <div className="col-span-2 w-full rounded-2xl bg-white shadow-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
            <h4 className="text-lg font-medium text-heading">Linked Account</h4>
            <button
              className="flex items-center gap-1 rounded-full bg-primary py-2 px-4 font-medium text-white"
              onClick={() => navigate('/admin/users/add')}
            >
              Add User
            </button>
          </div>

          <div className="p-5">
            <UsersTable
              users={users.slice(0, 10)}
              pageCount={totalPages}
              loading={loading}
              reload={getUsers}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUsers;
