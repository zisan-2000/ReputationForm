// src/components/ReuseableComp/AvatarList.jsx

const AvatarList = ({ owners, onAdd }) => {
  return (
    <div className="mb-4">
      <h3 className="mb-2 text-gray-700">Select Owners</h3>
      <div className="flex items-center gap-4">
        {owners.map((owner, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={owner.avatar}
              alt={owner.name}
              className="h-12 w-12 rounded-full"
            />
            <span className="text-sm">{owner.name}</span>
          </div>
        ))}
        <button
          onClick={onAdd}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AvatarList;
