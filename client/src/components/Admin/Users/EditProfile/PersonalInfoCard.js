import InputField from '../../../Shared/Form/InputField';
import SelectField from '../../../Shared/Form/SelectField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { CountriesAPI, UserAPI } from '../../../../api';

const initialValues = {
  name: '',
  email: '',
  dateOfBirth: '',
  presentAddress: '',
  permanentAddress: '',
  city: '',
  postalCode: '',
  country: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  dateOfBirth: Yup.date(),
  presentAddress: Yup.string(),
  permanentAddress: Yup.string(),
  city: Yup.string(),
  postalCode: Yup.string(),
  country: Yup.string(),
});

const PersonalInfoCard = ({ user }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    CountriesAPI.getAll().then((countries) => {
      setCountries(countries);
    });
  }, []);

  const onSubmit = (values) => {
    UserAPI.updateUser(user._id, {
      name: values.name,
      email: values.email,
      dateOfBirth: values.dateOfBirth,
      presentAddress: values.presentAddress,
      permanentAddress: values.permanentAddress,
      city: values.city,
      postalCode: values.postalCode,
      country: values.country,
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
    <div className="col-span-1 w-full rounded-2xl bg-white shadow-card md:col-span-2 lg:col-span-3">
      <h4 className="border-b border-border p-5 text-lg font-medium  text-heading">
        Personal Information
      </h4>

      <form
        className="grid grid-cols-1 gap-x-3 p-5 lg:grid-cols-2"
        onSubmit={formik.handleSubmit}
      >
        <InputField
          label="Your Name"
          placeholder="Name"
          {...formik.getFieldProps('name')}
          error={formik.touched.name && formik.errors.name}
        />
        <InputField
          label="Email"
          placeholder="Email"
          {...formik.getFieldProps('email')}
          error={formik.touched.email && formik.errors.email}
        />
        <InputField
          label="Date of Birth"
          placeholder="Date of Birth"
          type="date"
          {...formik.getFieldProps('dateOfBirth')}
          error={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
        />
        <InputField
          label="Present Address"
          placeholder="Present Address"
          {...formik.getFieldProps('presentAddress')}
          error={formik.touched.presentAddress && formik.errors.presentAddress}
        />
        <InputField
          label="Permanent Address"
          placeholder="Permanent Address"
          {...formik.getFieldProps('permanentAddress')}
          error={
            formik.touched.permanentAddress && formik.errors.permanentAddress
          }
        />
        <InputField
          label="City"
          placeholder="City"
          {...formik.getFieldProps('city')}
          error={formik.touched.city && formik.errors.city}
        />
        <InputField
          label="Postal Code"
          placeholder="Postal Code"
          {...formik.getFieldProps('postalCode')}
          error={formik.touched.postalCode && formik.errors.postalCode}
        />
        <SelectField
          label="Country"
          placeholder="Country"
          options={countries?.map((country) => ({
            label: country.country,
            value: country._id,
          }))}
          {...formik.getFieldProps('country')}
          error={formik.touched.country && formik.errors.country}
        />

        <div>
          <button className="rounded-full bg-success px-12 py-3 font-medium text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoCard;
