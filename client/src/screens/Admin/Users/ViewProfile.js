import InfoCard from '../../../components/Admin/Users/ViewProfile/InfoCard';
import WalletCard from '../../../components/Admin/Users/ViewProfile/WalletCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserAPI } from '../../../api';

const ViewProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    UserAPI.getUser(id)
      .then((res) => {
        setUser(res);
        setLoading(false);
      })
      .catch(() => {
        navigate('/admin/users');
      });
  }, [id]);

  return (
    <div className="max-h-[85vh] overflow-auto py-5">
      <div className="mx-auto max-w-lg px-4 md:max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-2">
          {loading ? (
            <div className="w-full text-center text-lg text-muted">
              Loading...
            </div>
          ) : (
            <>
              <InfoCard user={user} />
              <WalletCard user={user} />
            </>
          )}

          <div>
            <button
              type="button"
              className="rounded-full bg-primary px-12 py-3 font-medium text-white"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
