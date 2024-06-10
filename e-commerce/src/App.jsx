import {BrowserRouter as Router,Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import NoPage from './pages/NoPage/NoPage';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import ScrollTop from './components/scrolltop/ScrollTop';
const App = () => {
  return (
    <div>
    <Router>
      <ScrollTop></ScrollTop>
      <Routes>
       <Route path='/' element={<Home></Home>}/>
       <Route path='/*' element={<NoPage></NoPage>}/>
       <Route path='/productinfo' element={<ProductInfo></ProductInfo>}/>
      </Routes>
    </Router>
    </div>
  );
};

export default App;