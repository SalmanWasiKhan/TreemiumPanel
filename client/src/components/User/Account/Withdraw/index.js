import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { ConstantsAPI, WithdrawRequestAPI } from '../../../../api';
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
    WithdrawRequestAPI.createWithdrawRequest({
      ...values,
      exchangeRate: constants.exchangeRates?.[formik.values.currency],
      fee: constants.fee,
      vat: constants.vat,
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const [currencies, setCurrencies] = useState([]);
  const [constants, setConstants] = useState({});

  useEffect(() => {
    ConstantsAPI.getAll().then((res) => {
      setCurrencies(
        res.currencies.map((currency) => ({
          label: currency.name,
          value: currency.symbol,
        }))
      );
      setConstants({
        exchangeRates: res.exchangeRates,
        fee: res.fee,
        vat: res.vat,
      });
    });
  }, []);

  const hideAccountNumber = (number) => {
    const last4Digits = number.substring(number.length - 4);
    const stars = '*'.repeat(number.length - 4);
    return `${stars}${last4Digits}`;
  };

  const paymentMethods = user.bankAccounts
    ?.filter((bankAccount) => bankAccount.status === 'approved')
    .map((bankAccount) => {
      return {
        value: bankAccount._id,
        label: bankAccount.bankName + ' ' + hideAccountNumber(bankAccount.iban),
      };
    });

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
        exchangeRate={constants.exchangeRates?.[formik.values.currency] || null}
        fee={constants?.fee}
        vat={constants?.vat}
      />
    </>
  );
};

export default Withdraw;
