import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './styles.css';
import api from '../../services/api';
import { useHistory } from "react-router-dom";

const ProductAdd: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [supplier, setSupplier] = useState('');
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [picture_url, setPictureUrl] = useState('minha-foto.jpg');
  const history = useHistory();

  async function handleAddProduct(e: any) {
    e.preventDefault();

    const addedProduct = await api.post('/products', {
      name, 
      description, 
      supplier, 
      picture_url,
      price,
      weight
    });

    history.push('/products');
  }

  return (
    <Container>
      <Row className='mt-4'>
        <Col><h2>Adicionar novo produto</h2></Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Fornecedor</Form.Label>
              <Form.Control as="select" onChange={(e) => setSupplier(e.target.value)}>
                <option>60835e8dc7147741b020b664</option>
                <option>60835e8dc7147741b020b664</option>
                <option>60835e8dc7147741b020b664</option>
                <option>60835e8dc7147741b020b664</option>
                <option>60835e8dc7147741b020b664</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Preço</Form.Label>
              <Form.Control type="number" onChange={(e) => setPrice(parseFloat(e.target.value))}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Peso</Form.Label>
              <Form.Control type="number" onChange={(e) => setWeight(parseFloat(e.target.value))} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Foto</Form.Label>
              <Form.File />
            </Form.Group>
            <Form.Group>
              <Button onClick={handleAddProduct} variant="primary" type="submit" className='mt-3 add-button-full-width' block>
                Adicionar
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductAdd;