import logo from '../../assets/images/logo.png';
import SignInForm from '../../components/Admin/SignIn/SignInForm';

const SignIn = () => {
  return (
    <div className="flex  h-screen w-screen items-center justify-center">
      <div className="w-full max-w-md">
        <img src={logo} alt="logo" className="mx-auto my-12" />

        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
