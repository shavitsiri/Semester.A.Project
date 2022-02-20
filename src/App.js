import { Route, Routes} from 'react-router-dom';
import Home from "./FComponents/Pages/Home";
import Login from './FComponents/Pages/Login';
import SignUp from './FComponents/Pages/SignUp';
import Profile from './FComponents/Pages/Profile';
import About from './FComponents/Pages/About';
import Contact from './FComponents/Pages/Contact';
import MyCart from './FComponents/Pages/MyCart';
import Products from './FComponents/Pages/Products';
import Navbar from './FComponents/New/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './FComponents/New/Footer';
import AddProduct from './FComponents/Pages/AddProduct';
import EditUsers from './FComponents/Pages/EditUsers';
import UpdateDetails from './FComponents/Pages/UpdateDetails';
import OrderConfirmation from './FComponents/Pages/OrderConfirmation';


function App() {
  return (
    <div className="App" style={{backgroundColor:'#0A0909'}}> 
      <div>
        <Navbar/>
      </div>
    <Routes>
      <Route path='/' element={<Home/>} />

      <Route path='/Login' element={<Login/>} />

      <Route path='/SignUp' element={<SignUp/>} />

      <Route path='/Profile' element={<Profile/>} />

      <Route path='/About' element={<About/>} />

      <Route path='/Contact' element={<Contact/>} />

      <Route path='/MyCart' element={<MyCart/>} />

      <Route path='/Products' element={<Products/>} />

      <Route path='/AddProduct' element={<AddProduct/>} />

      <Route path='/EditUsers' element={<EditUsers/>} />

      <Route path='/UpdateDetails' element={<UpdateDetails/>} />

      <Route path='/OrderConfirmation' element={<OrderConfirmation/>} />
      

    </Routes>

 

<Footer/>
    </div>
  );
}

export default App;
