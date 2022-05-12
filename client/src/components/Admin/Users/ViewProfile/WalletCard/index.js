const WalletCard = ({ user }) => {
  return (
    <div className="w-full rounded-2xl bg-white shadow-card">
      <h4 className="border-b border-border p-5 text-lg font-medium  text-heading">
        Wallet
      </h4>

      <div className="p-5">
        <span className="">Available BTC</span>
        <h3 className="text-2xl font-medium text-heading">
          {/* minimum upto 8 decimals */}
          {user.balance.toFixed(8)} BTC
        </h3>

        {/* <div className="mt-6 flex items-center justify-between">
          <div>
            <span>Buy this month</span>
            <h3 className="text-lg font-medium text-heading">
              {wallet.buyThisMonth} BTC
            </h3>
          </div>
          <div>
            <span>Sell this month</span>
            <h3 className="text-lg font-medium text-heading">
              {wallet.sellThisMonth} BTC
            </h3>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WalletCard;
