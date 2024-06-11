import {BrowserRouter as Router,Route,
  Routes,
} from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Home from './pages/Home/Home';
import NoPage from './pages/NoPage/NoPage';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import ScrollTop from './components/scrolltop/ScrollTop';
import CartPage from './pages/cart/CartPage';
import AllProduct from './pages/allproduct/AllProduct';
import SignUp from './pages/registration/SignUp';
import Login from './pages/registration/Login';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import AddProductPage from './pages/admin/AddProductPage';
import UpdateProductPage from './pages/admin/UpdateProductPage';
import MyState from './context/MyState';
import ProtectedRouteForUser from './protectedRoute/ProtectedRouteForUser';
import { ProtectedRouteForAdmin } from './protectedRoute/ProtectedRouteForAdmin';
import CategoryPage from './pages/category/CategoryPage';
const App = () => {
  return (
    <MyState>
    <Router>
      <ScrollTop></ScrollTop>
      <Routes>
       <Route path='/' element={<Home></Home>}/>
       <Route path='/*' element={<NoPage></NoPage>}/>
       <Route path='/productinfo/:id' element={<ProductInfo></ProductInfo>}/>
       <Route path='/cart' element={<CartPage></CartPage>}/>
       <Route path='/allproduct' element={<AllProduct></AllProduct>}/>
       <Route path='/signup' element={<SignUp></SignUp>}/>
       <Route path='/login' element={<Login></Login>}/>
       <Route path='/user-dashboard' element={
        <ProtectedRouteForUser>
          <UserDashboard></UserDashboard>
        </ProtectedRouteForUser>
       }/>
       <Route path='/admin-dashboard' element={<ProtectedRouteForAdmin>
        <AdminDashboard></AdminDashboard>
       </ProtectedRouteForAdmin>}/>
       <Route path='/addproduct' element={<ProtectedRouteForAdmin>
        <AddProductPage></AddProductPage>
       </ProtectedRouteForAdmin>}/>
       <Route path='/updateproduct/:id' element={<ProtectedRouteForAdmin>
        <UpdateProductPage></UpdateProductPage>
       </ProtectedRouteForAdmin>}/>
    <Route path="/category/:categoryname" element={<CategoryPage></CategoryPage>}></Route>
      </Routes>
      <Toaster></Toaster>
    </Router>
    </MyState>
  );
};

export default App;