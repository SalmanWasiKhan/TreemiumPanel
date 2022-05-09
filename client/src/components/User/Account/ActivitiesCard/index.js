import { Table, Tbody, Tr, Td } from '../../../Shared/Table';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/outline';

const ActivitiesCard = () => {
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
          <Tr>
            <Td>
              <span className="h-7 w-7 rounded-full bg-success text-white">
                <ArrowUpIcon className="h-4 w-4" />
              </span>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};

export default ActivitiesCard;
