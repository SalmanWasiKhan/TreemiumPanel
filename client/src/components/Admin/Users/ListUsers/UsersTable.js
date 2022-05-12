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
import { UserAPI } from '../../../../api';

const UsersTable = ({ users, pageCount, loading, reload }) => {
  const navigate = useNavigate();

  const deleteUser = (id) => {
    UserAPI.deleteUser(id).then(() => {
      reload();
    });
  };

  return (
    <>
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
                  <button
                    className="text-danger"
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </Td>
            </Tr>
          ))}
          {!loading && users?.length === 0 && (
            <Tr>
              <Td colSpan={4} className="text-center">
                No users found
              </Td>
            </Tr>
          )}
          {loading && (
            <Tr>
              <Td colSpan={4} className="text-center">
                Loading...
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
      {pageCount > 1 && <Pagination totalPages={pageCount} />}
    </>
  );
};

export default UsersTable;
