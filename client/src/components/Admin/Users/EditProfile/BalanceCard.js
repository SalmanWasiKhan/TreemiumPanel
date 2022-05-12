import InputField from '../../../Shared/Form/InputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { UserAPI } from '../../../../api';

const initialValues = {
  balance: '',
};

const validationSchema = Yup.object({
  balance: Yup.number()
    .min(0, 'Balance must be greater than or equal to 0')
    .required('Balance is required'),
});

const BalanceCard = ({ user }) => {
  const onSubmit = (values) => {
    UserAPI.updateUser(user._id, {
      balance: parseFloat(values.balance),
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    formik.setValues({
      balance: user.balance,
    });
  }, [user]);

  return (
    <div className=" col-span-1 w-full rounded-2xl bg-white shadow-card md:col-span-2 lg:col-span-1">
      <h4 className="border-b border-border p-5 text-lg font-medium  text-heading">
        Wallet
      </h4>

      <form className="p-5" onSubmit={formik.handleSubmit}>
        <InputField
          label="Balance"
          placeholder="Balance"
          {...formik.getFieldProps('balance')}
          error={formik.touched.balance && formik.errors.balance}
        />

        <button className="rounded-full bg-success px-12 py-3 font-medium text-white">
          Save
        </button>
      </form>
    </div>
  );
};

export default BalanceCard;
