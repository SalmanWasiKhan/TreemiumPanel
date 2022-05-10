import UsersTable from '../../../components/Admin/Users/ListUsers/UsersTable';

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
    _id: '5e9f8f8f8f8t8f8f8f6f8f8',
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
    _id: '5e9f8f8f8f8t8f8f8f6f8f8',
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
  return (
    <div className="max-h-[85vh] overflow-auto py-5">
      <div className="mx-auto max-w-lg px-4 md:max-w-6xl">
        <UsersTable users={users.slice(0, 10)} pageCount={pageCount} />
      </div>
    </div>
  );
};

export default ListUsers;
