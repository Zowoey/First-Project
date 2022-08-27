import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Zoey's Website</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "black",
            backgroundColor: "pink",
            borderRadius: `8px`,
          }}
        >
          New Page
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
