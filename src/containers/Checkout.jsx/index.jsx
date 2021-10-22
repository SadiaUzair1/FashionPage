import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Button } from './styleComponents.jsx'

export const Checkout = () => {
  const price = useSelector(state => state.itemReducer)
  let [total, setTotal] = useState(0)

  useEffect(() => {
    for (let i = 0; i < price.cart.length; i++) {
      setTotal((total = total + (price.price * price.cart[i].quantity) / 100))
    }
  }, [])

  return (
    <div>
      <h3>
        SubTotal : {price.currency.symbol} {''} {total} {''}
        {price.currency.title}
      </h3>
      <Button> CHECKOUT </Button>
    </div>
  )
}
