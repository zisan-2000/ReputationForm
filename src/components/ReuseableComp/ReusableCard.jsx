const ReusableCard = ({ title, count, customClass }) => {
  return (
    <div
      className={` m-4 flex h-24 w-40 flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md ${customClass}`}
    >
      <h3 className="text-2xl font-bold text-blue-600">{count}</h3>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
};

export default ReusableCard;
