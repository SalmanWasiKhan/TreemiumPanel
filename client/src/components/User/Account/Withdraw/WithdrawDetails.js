import { formatUSD } from '../../../../utils/currencyFormatter';
import { Table, Tbody, Td, Tr } from '../../../Shared/Table';

const WithdrawDetails = ({
  amount,
  currency,
  paymentMethod,
  exchangeRate,
  fee,
  vat,
}) => {
  return (
    <div className="col-span-2 w-full rounded-2xl bg-white p-5 shadow-card lg:col-span-1">
      <Table>
        <Tbody>
          <Tr>
            <Td>
              <span className="text-primary">You are withdrawing</span>
            </Td>
            <Td>
              <span className="text-primary">
                {amount || '-'} {currency || '-'}
              </span>
            </Td>
          </Tr>
          <Tr>
            <Td>Payment Method</Td>
            <Td>{paymentMethod ? paymentMethod.label : '-'}</Td>
          </Tr>
          <Tr>
            <Td>Exchange Rate</Td>
            <Td>{exchangeRate ? `${exchangeRate} ${currency}` : '-'}</Td>
          </Tr>
          <Tr>
            <Td>Subtotal</Td>
            <Td>
              {amount && exchangeRate
                ? `${formatUSD(amount * (1 / exchangeRate))} USD`
                : '-'}
            </Td>
          </Tr>
          <Tr>
            <Td>Fee</Td>
            <Td>{fee ? formatUSD(fee) : '-'} USD</Td>
          </Tr>
          <Tr>
            <Td>Vat</Td>
            <Td>
              <span className="text-danger">
                {vat ? formatUSD(vat) : '-'} USD
              </span>
            </Td>
          </Tr>
          <Tr>
            <Td>Total</Td>
            <Td>
              {amount && exchangeRate
                ? `${formatUSD(amount * (1 / exchangeRate) + fee + vat)} USD`
                : '-'}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};

export default WithdrawDetails;
