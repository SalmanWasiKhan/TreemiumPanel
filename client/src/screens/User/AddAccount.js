import InputField from '../../components/Shared/Form/InputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import routingImage from '../../assets/images/routing.png';

const initialValues = {
  routingNumber: '',
  accountNumber: '',
  fullName: '',
  bankName: '',
};

const validationSchema = Yup.object({
  routingNumber: Yup.number().required('Routing number is required'),
  accountNumber: Yup.string().required('Account number is required'),
  fullName: Yup.string().required('Full name is required'),
  bankName: Yup.string().required('Bank name is required'),
});

const AddAccount = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-card">
        <h4 className="border-b border-border p-5 text-lg font-medium  text-heading">
          Link a bank account
        </h4>

        <form className="p-5" onSubmit={formik.handleSubmit}>
          <InputField
            label="Routing number"
            placeholder="25487"
            {...formik.getFieldProps('routingNumber')}
            error={formik.touched.routingNumber && formik.errors.routingNumber}
          />
          <InputField
            label="Account number"
            placeholder="1234567895421"
            {...formik.getFieldProps('accountNumber')}
            error={formik.touched.accountNumber && formik.errors.accountNumber}
          />
          <InputField
            label="Full name"
            placeholder="John Doe"
            {...formik.getFieldProps('fullName')}
            error={formik.touched.fullName && formik.errors.fullName}
          />
          <InputField
            label="Bank name"
            placeholder="Bank of America"
            {...formik.getFieldProps('bankName')}
            error={formik.touched.bankName && formik.errors.bankName}
          />

          <img src={routingImage} alt="Routing" className="w-full" />

          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              type="button"
              className="rounded-full bg-primary px-12 py-3 font-medium text-white"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            <button
              type="submit"
              className="rounded-full bg-success px-12 py-3 font-medium text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAccount;
