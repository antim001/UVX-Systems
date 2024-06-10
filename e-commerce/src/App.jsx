import {BrowserRouter as Router,Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import NoPage from './pages/NoPage/NoPage';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import ScrollTop from './components/scrolltop/ScrollTop';
import CartPage from './pages/cart/CartPage';
import AllProduct from './pages/allproduct/AllProduct';
import SignUp from './pages/registration/SignUp';
import Login from './pages/registration/Login';
import UserDashboard from './pages/user/UserDashboard';
const App = () => {
  return (
    <div>
    <Router>
      <ScrollTop></ScrollTop>
      <Routes>
       <Route path='/' element={<Home></Home>}/>
       <Route path='/*' element={<NoPage></NoPage>}/>
       <Route path='/productinfo' element={<ProductInfo></ProductInfo>}/>
       <Route path='/cart' element={<CartPage></CartPage>}/>
       <Route path='/allproduct' element={<AllProduct></AllProduct>}/>
       <Route path='/signup' element={<SignUp></SignUp>}/>
       <Route path='/login' element={<Login></Login>}/>
       <Route path='/user-dashboard' element={<UserDashboard></UserDashboard>}/>
      </Routes>
    </Router>
    </div>
  );
};

export default App;