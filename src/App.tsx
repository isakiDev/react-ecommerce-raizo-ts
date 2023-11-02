import { useState } from 'react'

import { ListProduct } from './components/ListProduct'
import { Header } from './components/Header'
import products from './mock/products.json'

const initialState = products

export function App () {
  const [listState] = useState(initialState)

  return (
    <>
      <Header/>
      <ListProduct listState = {listState} />
    </>
  )
}
