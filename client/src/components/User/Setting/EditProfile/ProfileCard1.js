import InputField from '../../../Shared/Form/InputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ProfilePicUpload from '../../../Shared/Form/ProfilePicUpload';
import { useEffect } from 'react';
import { UserAPI } from '../../../../api';

const initialValues = {
  name: '',
  profilePic: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  profilePic: Yup.mixed(),
});

const ProfileCard1 = ({ user }) => {
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    if (values.profilePic instanceof File) {
      formData.append('profilePic', values.profilePic);
    }

    UserAPI.updateUser(user._id, formData, true);
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
          label="Your Name"
          placeholder="Name"
          {...formik.getFieldProps('name')}
          error={formik.touched.name && formik.errors.name}
        />
        <ProfilePicUpload
          value={formik.values.profilePic}
          onChange={(file) => {
            formik.setFieldValue('profilePic', file);
          }}
          maxFileSize={2000000}
          name={formik.values.name || 'Profile Picture'}
        />
        <button className="rounded-full bg-success px-12 py-3 font-medium text-white">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileCard1;
