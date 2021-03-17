import { Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="">Home</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wraper">
                    <Link to="/add">Add Product</Link>
                    <Link to="/update">Update Product</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;