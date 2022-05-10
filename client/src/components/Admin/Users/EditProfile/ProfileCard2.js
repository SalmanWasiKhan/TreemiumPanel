import InputField from '../../../Shared/Form/InputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters'),
});

const ProfileCard2 = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className=" w-full rounded-2xl bg-white shadow-card ">
      <h4 className="border-b border-border p-5 text-lg font-medium  text-heading">
        User Profile
      </h4>

      <form className="p-5" onSubmit={formik.handleSubmit}>
        <InputField
          label="New Email"
          placeholder="Email"
          type="email"
          {...formik.getFieldProps('email')}
          error={formik.touched.email && formik.errors.email}
        />
        <InputField
          label="New Password"
          placeholder="**********"
          {...formik.getFieldProps('password')}
          error={formik.touched.password && formik.errors.password}
        />
        <button className="rounded-full bg-success px-12 py-3 font-medium text-white">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileCard2;
