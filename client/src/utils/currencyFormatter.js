export const formatUSD = (value) => {
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
  return formattedValue;
};

export const formatBTC = (value) => {
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BTC',
  }).format(value);
  return formattedValue;
};
