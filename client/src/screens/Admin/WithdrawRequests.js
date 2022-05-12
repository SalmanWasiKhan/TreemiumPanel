import { useEffect, useState } from 'react';
import RequestsTable from '../../components/Admin/WithdrawRequests/RequestsTable';
import SelectField from '../../components/Shared/Form/SelectField';
import useSearchParams from '../../hooks/useSearchParams';
import { WithdrawRequestAPI } from '../../api';

const withdrawStatuses = [
  {
    name: 'Pending',
    value: 'pending',
  },
  {
    name: 'Approved',
    value: 'approved',
  },
  {
    name: 'Rejected',
    value: 'rejected',
  },
];

// const requests = [
//   {
//     _id: '5e9f8f8f8f8f8f8f8f8f8f8',
//     user: {
//       _id: '5e9f8f8f8f8f8f8f8f8f8f8',
//       name: 'John Doe',
//     },
//     amount: 0.21,
//     total: 200,
//     status: 'pending',
//   },
//   {
//     _id: '1da3a3a3a3a3a3a3a3a3a3a3',
//     user: {
//       _id: '1da3a3a3a3a3a3a3a3a3a3a3',
//       name: 'Jane Doe',
//     },
//     amount: 0.1,
//     total: 100,
//     status: 'approved',
//   },
//   {
//     _id: '2da3a3a3a3a3a3a3a3a3a3a3',
//     user: {
//       _id: '2da3a3a3a3a3a3a3a3a3a3a3',
//       name: 'James Doe',
//     },
//     amount: 0.02,
//     total: 20,
//     status: 'rejected',
//   },
// ];

// const pageCount = 3;

const WithdrawRequests = () => {
  const [selectedStatus, setSelectedStatus] = useState('');
  const { search } = useSearchParams();
  const currentPage = parseInt(search.page || '1', 10);
  const perPage = parseInt(search.perPage || '10', 10);

  const [requests, setRequests] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const getRequests = () => {
    setLoading(true);
    WithdrawRequestAPI.getWithdrawRequests({
      status: selectedStatus,
      page: currentPage,
      limit: perPage,
    }).then((res) => {
      setRequests(res.withdrawRequests);
      setTotalPages(res.totalPages);
      setLoading(false);
    });
  };

  useEffect(() => {
    getRequests();
  }, [selectedStatus, currentPage, perPage]);

  return (
    <div className="max-h-[85vh] overflow-auto py-5">
      <div className="mx-auto max-w-lg px-4 md:max-w-6xl">
        <div className="col-span-2 w-full rounded-2xl bg-white shadow-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
            <h4 className="text-lg font-medium text-heading">
              Withdraw Requests
            </h4>

            <div className="flex items-center justify-center gap-4">
              <span>Request Status</span>

              <SelectField
                name="status"
                options={withdrawStatuses.map((status) => {
                  return {
                    label: status.name,
                    value: status.value,
                  };
                })}
                noGap
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              />
            </div>
          </div>

          <div className="p-5">
            <RequestsTable
              requests={requests}
              pageCount={totalPages}
              loading={loading}
              reload={getRequests}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawRequests;
