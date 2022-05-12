import InputField from '../../../Shared/Form/InputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserAPI } from '../../../../api';
import { useEffect } from 'react';

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

const ProfileCard2 = ({ user }) => {
  const onSubmit = (values) => {
    UserAPI.updateUser(user._id, {
      email: values.email,
      password: values.password,
    }).then(() => {
      formik.setFieldValue('password', '');
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    formik.setValues(user);
  }, [user]);

  return (
    <div className="col-span-2 w-full rounded-2xl bg-white shadow-card lg:col-span-1">
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
