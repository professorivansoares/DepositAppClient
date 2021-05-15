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
            <Nav.Link><Link to='/deposits'><FontAwesomeIcon icon={faWarehouse} /> Depositos</Link></Nav.Link>
            <Nav.Link><Link to='/inventories'><FontAwesomeIcon icon={faArchive} /> Estoque</Link></Nav.Link>
            <Nav.Link><Link to='/products'><FontAwesomeIcon icon={faBoxOpen} /> Produtos</Link></Nav.Link>
            <Nav.Link><Link to='/suppliers'><FontAwesomeIcon icon={faUsers} /> Fornecedores</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
