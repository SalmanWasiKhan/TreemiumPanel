import { Table, Tbody, Tr, Td, Pagination } from '../../../Shared/Table';
import { CheckIcon } from '@heroicons/react/outline';
import { formatBTC, formatUSD } from '../../../../utils/currencyFormatter';
import { useState } from 'react';
import useSearchParams from '../../../../hooks/useSearchParams';

const ActivitiesCard = ({ user }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState([]);
  const { search } = useSearchParams();
  const pageCount = parseInt(search.page, 10) || 1;

  return (
    <div className="col-span-2 w-full rounded-2xl bg-white  shadow-card">
      <h4 className="border-b border-border p-5 text-lg font-medium  text-heading">
        All Activities
      </h4>
      <div className="p-5">
        <Table>
          <Tbody>
            {requests?.map((request) => (
              <Tr key={request._id}>
                <Td className="text-center">
                  {request.paymentMethod.bankName}
                </Td>
                <Td className="text-center">
                  {request.paymentMethod.accountNumber}
                </Td>
                <Td className="text-center">{formatBTC(request.amount)}</Td>
                <Td className="text-center">
                  {formatUSD(request.totalAmount)}
                </Td>
                <Td className="text-center">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border border-border text-white ${
                        request.status === 'approved'
                          ? 'bg-success'
                          : request.status === 'pending'
                          ? 'bg-primary'
                          : 'bg-danger'
                      }`}
                    >
                      {request.status === 'approved' && (
                        <CheckIcon className="h-6 w-6" />
                      )}
                    </div>
                    {request.status === 'approved' ? (
                      <p className="cursor-pointer hover:text-primary">
                        Verified
                      </p>
                    ) : request.status === 'pending' ? (
                      <p className="cursor-pointer hover:text-primary">
                        Pending
                      </p>
                    ) : (
                      <p className="cursor-pointer hover:text-primary">
                        Not Verified
                      </p>
                    )}
                  </div>
                </Td>
              </Tr>
            ))}
            {!loading && requests?.length === 0 && (
              <Tr>
                <Td colSpan={4} className="text-center">
                  No users found
                </Td>
              </Tr>
            )}
            {loading && (
              <Tr>
                <Td colSpan={5} className="text-center">
                  Loading...
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
        {pageCount > 1 && <Pagination totalPages={pageCount} />}
      </div>
    </div>
  );
};

export default ActivitiesCard;
