import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import AllProduct from './components/AllProduct/AllProduct';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header ';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import ManageItem from './components/ManageItem/ManageItem';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Require from './components/Require/Require';
import Verify from './components/Verify/Verify';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/allproduct" element={
          <AllProduct></AllProduct>
        }></Route>
        <Route path="/product/:productId" element={<Require>
          <Inventory></Inventory>
        </Require>}></Route>
        <Route path="additem" element={<Require><AddItem></AddItem></Require>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/verify" element={<Verify></Verify>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
