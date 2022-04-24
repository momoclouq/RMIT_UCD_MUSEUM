import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/basic">Time and Place</Link>
        </nav>
    )
}

export default Navbar;