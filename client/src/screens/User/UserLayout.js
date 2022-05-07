import Header from '../../components/Shared/Header';
import Sidebar from '../../components/Shared/Sidebar';
import UserRouter from '../../routes/UserRouter';

const UserLayout = () => {
  return (
    <div className="flex h-full min-h-screen w-full">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1">
          <UserRouter />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
