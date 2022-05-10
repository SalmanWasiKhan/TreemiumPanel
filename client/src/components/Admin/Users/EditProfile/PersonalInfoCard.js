import InputField from '../../../Shared/Form/InputField';
import SelectField from '../../../Shared/Form/SelectField';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

const countries = [
  {
    _id: 1,
    name: 'Afghanistan',
  },
  {
    _id: 2,
    name: 'Albania',
  },
  {
    _id: 3,
    name: 'Algeria',
  },
  {
    _id: 4,
    name: 'Andorra',
  },
  {
    _id: 5,
    name: 'Angola',
  },
];

const PersonalInfoCard = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

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
          options={countries.map((country) => ({
            label: country.name,
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
