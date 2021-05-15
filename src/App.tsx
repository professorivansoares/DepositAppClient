import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import SupplierAdd from './pages/SupplierAdd';
import ProductAdd from './pages/ProductAdd';
import './App.css';
import DepositAdd from './pages/DepositAdd';
import InventoryAdd from './pages/InventoryAdd';
import Home from './pages/Home';
import ProductList from './pages/ProductList';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/deposits' component={DepositAdd}/>  
        <Route path='/inventories' component={InventoryAdd}/>  
        <Route path='/suppliers' component={SupplierAdd}/>  
        <Route path='/products/add' component={ProductAdd}/>   
        <Route path='/products' component={ProductList}/>               
        <Route path='/' component={Home}/>       
      </Switch>
      <Footer />
    </>
  );
}

export default App;
