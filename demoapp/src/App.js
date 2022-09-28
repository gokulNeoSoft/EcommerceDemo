import './App.css'
import Home from './components/Home'
import Error from './components/404'
import Contactus from './components/Contact'
import Productdetails from './components/ProductDetails'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Login from './components/Login'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Blog from './components/Blog'
import Blogsingle from './components/Blogsingle'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Productdetails" element={<Productdetails />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Blogsingle' element={<Blogsingle />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
