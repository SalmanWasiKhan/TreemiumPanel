import InputField from '../../Shared/Form/InputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SwitchButton from '../../Shared/Form/SwitchButton';
import { Link } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('This field is required.'),
  password: Yup.string()
    .required('This field is required.')
    .min(6, 'Password must be at least 6 characters long.'),
  rememberMe: Yup.boolean(),
});

const SignInForm = () => {
  const onSubmit = (values) => {
    console.log(values);
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
      <form className="p-5 ">
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

        <div className="flex flex-wrap justify-between">
          <SwitchButton
            label="Remember me"
            enabled={formik.values.rememberMe}
            setEnabled={(value) => formik.setFieldValue('rememberMe', value)}
          />

          <Link to="/forgot-password" className="">
            Forgot password?
          </Link>
        </div>

        <button className="mt-8 w-full rounded-full bg-success p-3 font-medium text-white">
          Sign in
        </button>

        <p className="mt-3 mb-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
