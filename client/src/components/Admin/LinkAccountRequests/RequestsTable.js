import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Pagination,
} from '../../Shared/Table';
import { CheckIcon, BanIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const RequestsTable = ({ requests, pageCount }) => {
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Routing number</Th>
            <Th>Account number</Th>
            <Th>Full name</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {requests?.map((request) => (
            <Tr key={request._id}>
              <Td>
                <Link
                  to={`/admin/users/${request.user._id}`}
                  className="transition hover:text-primary"
                >
                  {request.user.name}
                </Link>
              </Td>
              <Td>{request.routingNumber}</Td>
              <Td>{request.accountNumber}</Td>
              <Td>{request.fullName}</Td>
              <Td className="text-center">
                {request.status === 'pending' ? (
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="transition hover:text-success"
                      onClick={() => {}}
                    >
                      <CheckIcon className="h-5 w-5" />
                    </button>
                    <button className="transition hover:text-danger">
                      <BanIcon className="h-5 w-5" />
                    </button>
                  </div>
                ) : request.status === 'approved' ? (
                  <div className="text-success">
                    <CheckIcon className="mx-auto h-6 w-6" />
                  </div>
                ) : (
                  <div className="text-danger">
                    <BanIcon className="mx-auto h-6 w-6" />
                  </div>
                )}
              </Td>
            </Tr>
          ))}
          {requests?.length === 0 && (
            <Tr>
              <Td colSpan={4} className="text-center">
                No users found
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
      {pageCount > 1 && <Pagination totalPages={pageCount} />}
    </>
  );
};

export default RequestsTable;
