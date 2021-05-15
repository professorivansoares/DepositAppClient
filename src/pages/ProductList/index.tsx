import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import './styles.css';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from '../../services/api';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export interface ProductInterface {
  _id: string;
  description: string;
  name: string;
  picture_url: string;
  price: number;
  weight: number;
  supplier: string;
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const history = useHistory();

  useEffect(() => {
    async function getProducts() {
      const products = await api.get('/products');

      setProducts(products.data);
    }

    getProducts();
  }, [])

  function addProductHandleClick() {
    history.push('/products/add');
  }

  return (
    <Container>
      <Row className='mt-4'>
        <Col><h2>Listagem de Produtos</h2></Col>
        <Col><Button onClick={addProductHandleClick} variant="primary" className='add-product-button'>Adicionar novo produto</Button></Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Peso</th>
                <th>Editar</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map(product => {
                  return (
                    <tr>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.price}</td>
                      <td>{product.weight}kg</td>
                      <th><Link to={`/products/${product._id}`}><FontAwesomeIcon icon={faPencilAlt} /></Link></th>
                      <th><FontAwesomeIcon icon={faTrash} onClick={() => window.confirm('Você realmente deseja remover?')} /></th>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductList;