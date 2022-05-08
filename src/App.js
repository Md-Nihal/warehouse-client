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
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div >
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<InventoryProduct></InventoryProduct>}></Route>
        <Route path='/products/:inventoryId' element={<RequireAuth>
          <SingleInventory></SingleInventory>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
