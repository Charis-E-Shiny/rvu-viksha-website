import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/viksha-logo.png" alt="Viksha Logo" className="nav-logo" />
        <img src="/rvu-logo.png" alt="RVU Logo" className="nav-logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Achievements</a>
        </li>
        <li>
          <a href="#">Our Team</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
