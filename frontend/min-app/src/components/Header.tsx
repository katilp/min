import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Helpers.css';

const Header = () => {

	return (
		<div>
			<Navbar expand="lg" className="bg-body-tertiary" fixed="top">
				<Container>
					<Nav className="me-auto">
						<Navbar.Brand>I minerali del vecio</Navbar.Brand>
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;