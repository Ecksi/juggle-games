import { Link } from "react-router-dom";
import Avatar from "../atoms/Avatar";
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/chart">Chart</Link>
      <Link to="/tasks">Tasks</Link>
      <Avatar />
    </nav>
  );
}
