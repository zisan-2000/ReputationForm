import { useLocation } from "react-router-dom";
import profile from "../../assets/images/profile.jpg";

// Dummy user object for demonstration; replace with actual user data source
const user = {
  avatarUrl: profile, // Use the imported image here as the avatar URL
  name: "Md. Zulfiker", // Use a string for the user's name
};

const Header = () => {
  const location = useLocation();
  const pageTitle =
    location.pathname === "/"
      ? "Dashboard Page"
      : location.pathname.slice(1).charAt(0).toUpperCase() +
        location.pathname.slice(2);

  return (
    <header className="flex items-center justify-between bg-slate-300 p-4 text-slate-800">
      <h1 className="text-3xl">{pageTitle}</h1>
      <div className="flex items-center">
        {/* Avatar */}
        <img
          src={user.avatarUrl}
          alt={`${user.name}'s avatar`}
          className="mr-2 h-10 w-8 rounded-full"
        />
        <span className="hidden md:block">{user.name}</span>
      </div>
    </header>
  );
};

export default Header;
