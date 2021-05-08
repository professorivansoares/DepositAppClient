import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import SupplierAdd from './pages/SupplierAdd';
import ProductAdd from './pages/ProductAdd';
import './App.css';
import DepositAdd from './pages/DepositAdd';
import InventoryAdd from './pages/InventoryAdd';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/deposit' component={DepositAdd}/>  
        <Route path='/inventory' component={InventoryAdd}/>  
        <Route path='/supplier' component={SupplierAdd}/>  
        <Route path='/product' component={ProductAdd}/>               
        <Route path='/' component={() => { return (<h2>test</h2>)}}/>       
      </Switch>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
