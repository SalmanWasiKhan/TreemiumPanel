import InputField from '../../components/Shared/Form/InputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import routingImage from '../../assets/images/routing.png';
import { UserAPI } from '../../api';

const initialValues = {
  swiftCode: '',
  iban: '',
  fullName: '',
  bankName: '',
};

const validationSchema = Yup.object({
  swiftCode: Yup.string().required('Routing number is required'),
  iban: Yup.string()
    .required('Account number is required')
    .matches(/^[A-Z]{2}[0-9]+$/, 'Invalid IBAN'),
  fullName: Yup.string().required('Full name is required'),
  bankName: Yup.string().required('Bank name is required'),
});

const AddAccount = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    UserAPI.requestBankAccount(values).then(() => {
      navigate('/setting/linked-accounts');
    });
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
            label="Swift Code"
            placeholder="123FA876WS4"
            {...formik.getFieldProps('swiftCode')}
            error={formik.touched.swiftCode && formik.errors.swiftCode}
          />
          <InputField
            label="IBAN"
            placeholder="IT5345695421"
            {...formik.getFieldProps('iban')}
            error={formik.touched.iban && formik.errors.iban}
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

          {/* <img src={routingImage} alt="Routing" className="w-full" /> */}

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
