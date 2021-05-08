import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { faArchive, faHome, faUsers, faBoxOpen, faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">DepositApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to='/'><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
            <Nav.Link><Link to='/deposit'><FontAwesomeIcon icon={faWarehouse} /> Depositos</Link></Nav.Link>
            <Nav.Link><Link to='/inventory'><FontAwesomeIcon icon={faArchive} /> Estoque</Link></Nav.Link>
            <Nav.Link><Link to='/product'><FontAwesomeIcon icon={faBoxOpen} /> Produtos</Link></Nav.Link>
            <Nav.Link><Link to='/supplier'><FontAwesomeIcon icon={faUsers} /> Fornecedores</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text><i>Mark Otto</i> <a href="#login">Logout</a></Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;
