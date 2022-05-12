import { Table, Tbody, Tr, Td, Pagination } from '../../../Shared/Table';
import { CheckIcon, BanIcon } from '@heroicons/react/outline';
import { formatBTC, formatUSD } from '../../../../utils/currencyFormatter';

const ActivitiesCard = ({ pageCount }) => {
  const activities = [
    {
      type: 'withdraw',
      currency: 'BTC',
      paymentMethod: {
        name: 'Bank of America ********1234',
      },
      amount: 0.32,
      total: 1000,
    },
  ];

  return (
    <div className="col-span-2 w-full rounded-2xl bg-white p-5 shadow-card">
      <h4>All Activities</h4>

      <Table>
        <Tbody>
          {activities?.map((request) => (
            <Tr key={request._id}>
              <Td className="text-center">{formatBTC(request.amount)}</Td>
              <Td className="text-center">{formatUSD(request.totalAmount)}</Td>
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
          {activities?.length === 0 && (
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

export default ActivitiesCard;
