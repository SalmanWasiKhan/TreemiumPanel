import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Pagination,
} from '../../../Shared/Table';
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import { formatBTC } from '../../../../utils/currencyFormatter';

const UsersTable = ({ users, pageCount }) => {
  const navigate = useNavigate();

  return (
    <div className="col-span-2 w-full rounded-2xl bg-white p-5 shadow-card">
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th className="text-center">Balance</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((user) => (
            <Tr key={user._id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td className="text-center">{formatBTC(user.balance)}</Td>
              <Td className="text-center">
                <div className="space-x-2">
                  <button
                    className="transition hover:text-primary"
                    onClick={() => {
                      navigate(`/admin/users/${user._id}`);
                    }}
                  >
                    <EyeIcon className="h-5 w-5" />
                  </button>
                  <button
                    className="transition hover:text-primary"
                    onClick={() => {
                      navigate(`/admin/users/${user._id}/edit`);
                    }}
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button className="text-danger">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </Td>
            </Tr>
          ))}
          {users?.length === 0 && (
            <Tr>
              <Td colSpan={4} className="text-center">
                No users found
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
      {pageCount > 1 && <Pagination totalPages={pageCount} />}
    </div>
  );
};

export default UsersTable;
