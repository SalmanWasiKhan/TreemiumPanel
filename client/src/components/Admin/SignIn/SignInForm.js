import InputField from '../../Shared/Form/InputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('This field is required.'),
  password: Yup.string()
    .required('This field is required.')
    .min(6, 'Password must be at least 6 characters long.'),
});

const SignInForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
    login(values, () => navigate('/admin'));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="mx-4 rounded-xl border border-border bg-white shadow-card">
      <h4 className="border-b border-border p-5 text-center text-lg font-medium  text-heading">
        Sign In
      </h4>
      <form className="p-5 " onSubmit={formik.handleSubmit}>
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

        <button className="mt-8 w-full rounded-full bg-success p-3 font-medium text-white">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
