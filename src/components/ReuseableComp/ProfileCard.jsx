// ProfileCard.jsx
const ProfileCard = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Circular Image */}
      <div className="h-24 w-24">
        <img
          src={image}
          alt={name}
          className="h-full w-full rounded-full border-2 border-gray-300 object-cover"
        />
      </div>

      {/* Name */}
      <p className="font-medium text-gray-800">{name}</p>
    </div>
  );
};

export default ProfileCard;
