import { useState } from 'react';
import RequestsTable from '../../components/Admin/LinkAccountRequests/RequestsTable';
import SelectField from '../../components/Shared/Form/SelectField';

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

const requests = [
  {
    _id: '5e9f8f8f8f8f8f8f8f8f8f8',
    user: {
      _id: '5e9f8f8f8f8f8f8f8f8f8f8',
      name: 'John Doe',
    },
    routingNumber: '123456789',
    accountNumber: '123451236789',
    fullName: 'John Doe',
    status: 'pending',
  },
  {
    _id: '1da3a3a3a3a3a3a3a3a3a3a3',
    user: {
      _id: '1da3a3a3a3a3a3a3a3a3a3a3',
      name: 'Jane Doe',
    },
    routingNumber: '123456789',
    accountNumber: '123451236789',
    fullName: 'Jane Doe',
    status: 'approved',
  },
  {
    _id: '2da3a3a3a3a3a3a3a3a3a3a3',
    user: {
      _id: '2da3a3a3a3a3a3a3a3a3a3a3',
      name: 'James Doe',
    },
    routingNumber: '123456789',
    accountNumber: '123451236789',
    fullName: 'James Doe',
    status: 'rejected',
  },
];

const pageCount = 3;

const WithdrawRequests = () => {
  const [selectedStatus, setSelectedStatus] = useState('');

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
              requests={requests.slice(0, 10)}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawRequests;
