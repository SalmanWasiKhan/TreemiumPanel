import InputField from '../../../components/Shared/Form/InputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const AddUser = () => {
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
          Add a new user
        </h4>

        <form className="p-5" onSubmit={formik.handleSubmit}>
          <InputField
            label="Username"
            placeholder="John Doe"
            {...formik.getFieldProps('username')}
            error={formik.touched.username && formik.errors.username}
          />

          <InputField
            label="Email"
            type="email"
            placeholder="hello@example.com"
            {...formik.getFieldProps('email')}
            error={formik.touched.email && formik.errors.email}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
            error={formik.touched.password && formik.errors.password}
          />

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

export default AddUser;
