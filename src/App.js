/*
https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-Md-Nihal
*/

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import InventoryProduct from './Pages/Inventory/InventoryProduct/InventoryProduct';
import SingleInventory from './Pages/Inventory/SingleInventory/SingleInventory';


function App() {
  return (
    <div >
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<InventoryProduct></InventoryProduct>}></Route>
        <Route path='/products/:inventoryId' element={<SingleInventory></SingleInventory>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
