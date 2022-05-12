import { useFormik } from 'formik';
import * as Yup from 'yup';
import WithdrawCard from './WithdrawCard';
import WithdrawDetails from './WithdrawDetails';

const initialValues = {
  currency: '',
  paymentMethod: '',
  amount: '',
};

const validationSchema = Yup.object().shape({
  currency: Yup.string().required('This field is required.'),
  paymentMethod: Yup.string().required('This field is required.'),
  amount: Yup.number()
    .min(0.0001, 'Amount must be greater than 0.')
    .required('This field is required.'),
});

const Withdraw = ({ user }) => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const currencies = [
    {
      value: 'BTC',
      label: 'Bitcoin',
    },
    {
      value: 'LTC',
      label: 'Litecoin',
    },
  ];

  const paymentMethods = user.bankAccounts.map((bankAccount) => {
    return {
      value: bankAccount._id,
      label: bankAccount.bankName,
    };
  });

  const constants = {
    exchangeRate: { BTC: 0.00212455, LTC: 0.00212455 },
    fee: 28,
    vat: 25,
  };

  return (
    <>
      <WithdrawCard
        formik={formik}
        currencies={currencies}
        paymentMethods={paymentMethods}
      />
      <WithdrawDetails
        amount={formik.values.amount}
        currency={formik.values.currency}
        paymentMethod={paymentMethods.find(
          (paymentMethod) => paymentMethod.value === formik.values.paymentMethod
        )}
        exchangeRate={constants.exchangeRate[formik.values.currency] || null}
        fee={constants.fee}
        vat={constants.vat}
      />
    </>
  );
};

export default Withdraw;
