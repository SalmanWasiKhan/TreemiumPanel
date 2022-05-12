import SelectField from '../../../Shared/Form/SelectField';
import BitcoinIcon from '../../../../assets/icons/BitcoinIcon';
import BankIcon from '../../../../assets/icons/BankIcon';
import InputField from '../../../Shared/Form/InputField';

const WithdrawCard = ({ formik, currencies, paymentMethods }) => {
  return (
    <div className="col-span-2 w-full rounded-2xl bg-white shadow-card lg:col-span-1">
      <h4 className="border-b border-border p-5 text-lg font-medium  text-heading">
        Withdraw
      </h4>

      <form className="p-5" onSubmit={formik.handleSubmit}>
        <SelectField
          Icon={BitcoinIcon}
          label="Currency"
          options={currencies}
          {...formik.getFieldProps('currency')}
          error={formik.touched.currency && formik.errors.currency}
        />

        <SelectField
          Icon={BankIcon}
          label="Payment Method"
          options={paymentMethods}
          {...formik.getFieldProps('paymentMethod')}
          error={formik.touched.paymentMethod && formik.errors.paymentMethod}
        />

        <InputField
          label="Enter your amount"
          type="number"
          placeholder="0.0214 BTC"
          {...formik.getFieldProps('amount')}
          error={formik.touched.amount && formik.errors.amount}
        />

        {/* <div className="flex items-center justify-between">
          <p>Monthly Limit</p>
          <h6 className="text-sm font-medium leading-tight text-heading">
            $49700 remaining
          </h6>
        </div> */}

        <button
          type="submit"
          className="mt-8 w-full rounded-full bg-success p-3 font-medium text-white"
        >
          Withdraw Now
        </button>
      </form>
    </div>
  );
};

export default WithdrawCard;
