import React from "react";
import { Button } from "react-bootstrap";

const ProductAdd: React.FC = () => {
  return (
    <>
      <h2>Produtos Add</h2>
      <p>Adicione um novo produto</p>
      <Button variant="primary">Adicionar novo produto</Button>
    </>
  )
}

export default ProductAdd;