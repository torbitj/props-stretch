import { useState } from 'react'
import products from './data'
import Product from './Product'

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <Product product={products[0]} />
      <Product product={products[1]} />
      <Product product={products[2]} />
    </>
  );
}

export default App
