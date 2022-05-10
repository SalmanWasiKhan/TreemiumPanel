import UsersTable from '../../../components/Admin/Users/ListUsers/UsersTable';
import { useNavigate } from 'react-router-dom';

const users = [
  {
    _id: '5e9f8f8f8f8f8f8f8f8f8f8',
    name: 'John Doe',
    email: 'john@doe.com',
    balance: 2,
  },
  {
    _id: '5e9f8f8f8f8f8f8f8f2f8f8',
    name: 'John Doe',
    email: 'john@doe.com',
    balance: 2,
  },
  {
    _id: '5e9f8f8f8f8f8f8f8f3f8f8',
    name: 'John Doe',
    email: 'john@doe.com',
    balance: 2,
  },
  {
    _id: '5e9f8f8f8f8f8a8f8f4f8f8',
    name: 'John Doe',
    email: 'john@doe.com',
    balance: 2,
  },
  {
    _id: '5e9f8f8f8e8f8f8f8f5f8f8',
    name: 'John Doe',
    email: 'john@doe.com',
    balance: 2,
  },
  {
    _id: '5e9f8f8fa8f8f8f8f6f8f8',
    name: 'John Doe',
    email: 'john@doe.com',
    balance: 2,
  },
  {
    _id: '5edf8f8f8f8f8f8f8f8f8f',
    name: 'John Doe',
    email: 'john@doe.com',
    balance: 2,
  },
  {
    _id: '5e9f8f8g8f8f8f8f8f8f8',
    name: 'John Doe',
    email: 'john@doe.com',
    balance: 2,
  },
  {
    _id: '5e9f8f8f8f8a8f8f8f8f8',
    name: 'John Doe',
    email: 'john@doe.com',
    balance: 2,
  },
  {
    _id: '5e9f8f8f8f8t8f8f8f6f8f8',
    name: 'John Doe',
    email: 'john@doe.com',
    balance: 2,
  },
  {
    _id: '5e9f8f8f8f8t8f8f8f3f8f8',
    name: 'John Doe',
    email: 'john@doe.com',
    balance: 2,
  },
  {
    _id: '5e9f8f8f8f8t2f8f8f4f8f8',
    name: 'John Doe',
    email: 'john@doe.com',
    balance: 2,
  },
  {
    _id: '5e9f8f8f8s8f8f8f5f8f8f8',
    name: 'John Doe',
    email: 'john@doe.com',
    balance: 2,
  },
  {
    _id: '5e9f8fa8f8f8f8f8f6f8f8f8',
    name: 'John Doe',
    email: 'john@doe.com',
    balance: 2,
  },
];

const pageCount = Math.ceil(users.length / 10);

const ListUsers = () => {
  const navigate = useNavigate();

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
            <UsersTable users={users.slice(0, 10)} pageCount={pageCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUsers;
