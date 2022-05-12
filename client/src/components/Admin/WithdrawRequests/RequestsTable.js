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
import { formatUSD, formatBTC } from '../../../utils/currencyFormatter';
import { Link } from 'react-router-dom';
import { WithdrawRequestAPI } from '../../../api';

const RequestsTable = ({ requests, pageCount, loading, reload }) => {
  const approveRequest = (id) => {
    WithdrawRequestAPI.approveWithdrawRequest(id, true).then(() => {
      reload();
    });
  };

  const rejectRequest = (id) => {
    WithdrawRequestAPI.approveWithdrawRequest(id, false).then(() => {
      reload();
    });
  };

  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th className="text-center">Bank Name</Th>
            <Th className="text-center">IBAN</Th>
            <Th className="text-center">Request Amount</Th>
            <Th className="text-center">Total</Th>
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
              <Td className="text-center">{request.paymentMethod.bankName}</Td>
              <Td className="text-center">{request.paymentMethod.iban}</Td>
              <Td className="text-center">{formatBTC(request.amount)}</Td>
              <Td className="text-center">{formatUSD(request.totalAmount)}</Td>
              <Td className="text-center">
                {request.status === 'pending' ? (
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="transition hover:text-success"
                      onClick={() => {
                        approveRequest(request._id);
                      }}
                    >
                      <CheckIcon className="h-5 w-5" />
                    </button>
                    <button
                      className="transition hover:text-danger"
                      onClick={() => {
                        rejectRequest(request._id);
                      }}
                    >
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
          {!loading && requests?.length === 0 && (
            <Tr>
              <Td colSpan={6} className="text-center">
                No users found
              </Td>
            </Tr>
          )}
          {loading && (
            <Tr>
              <Td colSpan={6} className="text-center">
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

export default RequestsTable;
