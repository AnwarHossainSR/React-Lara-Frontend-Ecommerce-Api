//import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import Home from './Home';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/login"><Login/></Route>
      <Route path="/register"><Register/></Route>
      <Route path="/add"> <Protected Cmp={AddProduct} /></Route>
      <Route path="/update"><Protected Cmp={UpdateProduct} /></Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
