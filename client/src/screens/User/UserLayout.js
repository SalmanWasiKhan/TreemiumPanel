import BottomBar from '../../components/Shared/BottomBar.js';
import Header from '../../components/Shared/Header';
import Sidebar from '../../components/Shared/Sidebar';
import UserRouter from '../../routes/UserRouter';

const UserLayout = () => {
  return (
    <div className="h-full min-h-screen w-full ">
      <Sidebar />

      <div className="flex flex-col md:ml-60">
        <Header />
        <main className="flex-1">
          <UserRouter />
        </main>

        <BottomBar />
      </div>
    </div>
  );
};

export default UserLayout;
