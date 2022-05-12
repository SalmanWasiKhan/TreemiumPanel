import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './contexts/AuthContext';
import AppRouter from './routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen w-full bg-body-bg font-poppins text-body-text">
      <AuthProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
