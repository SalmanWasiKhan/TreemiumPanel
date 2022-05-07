import { useFormik } from 'formik';
import * as Yup from 'yup';
import WithdrawCard from './WithdrawCard';

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

const Withdraw = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <WithdrawCard formik={formik} />
    </>
  );
};

export default Withdraw;
