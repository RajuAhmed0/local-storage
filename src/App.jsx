import { useState } from 'react'
import './App.css'
import Cart from './Componets/Cart/Cart'
import Site from './Componets/Site/Site'

function App() {
  const [products, setProducts] = useState([])

  return (
    <div>
      <h2 className='text-center text-4xl font-semibold'>All Products</h2>
      <Site
        products={products}
        setProducts={setProducts}
      ></Site>
      <Cart
      products = {products}
      ></Cart>
    </div>
  )
}

export default App
