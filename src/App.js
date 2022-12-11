import Navbar from './components/Navbar';
import './app.css'
import Dashboard from './screens/Dashboard';
import {Route, Routes} from "react-router-dom"
import Login from './screens/Login';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Signup from './screens/Signup';
import Products from './screens/Products';

function App() {
  return (
    
    <div className="App">
   
     
    <Navbar/>
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/products" element={<Products/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route> 
    </Routes>
    
  
 
    </div>
  );
}

export default App;
