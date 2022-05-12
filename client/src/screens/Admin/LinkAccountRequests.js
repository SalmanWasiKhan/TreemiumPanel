import { useEffect, useState } from 'react';
import { UserAPI } from '../../api';
import RequestsTable from '../../components/Admin/LinkAccountRequests/RequestsTable';
import SelectField from '../../components/Shared/Form/SelectField';
import useSearchParams from '../../hooks/useSearchParams';

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
    UserAPI.getBankAccounts({
      status: selectedStatus,
      page: currentPage,
      limit: perPage,
    }).then((res) => {
      setRequests(res.bankAccounts);
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
              Link Account Requests
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
