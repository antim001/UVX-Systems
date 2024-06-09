import {BrowserRouter as Router,Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import NoPage from './pages/NoPage/NoPage';
const App = () => {
  return (
    <div>
    <Router>
      <Routes>
       <Route path='/' element={<Home></Home>}/>
       <Route path='/*' element={<NoPage></NoPage>}/>
      </Routes>
    </Router>
    </div>
  );
};

export default App;