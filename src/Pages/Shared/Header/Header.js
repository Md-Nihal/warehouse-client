import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container className='d-flex'>
                    <Navbar.Brand as={Link} to="/">Digital Supply Co.</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/inventory">Manage Inventory</Nav.Link>
                    </Nav>

                    <Nav>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/addproduct">Add Product</Nav.Link>
                                    
                                    <Nav.Link as={Link} to="/myitem">My Items</Nav.Link>
                                </>

                            }
                            {
                                user ?
                                    <button className='btn text-white' onClick={handleSignOut}>Sign out</button>
                                    :
                                    <Nav.Link eventKey={2} as={Link} to="/login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;