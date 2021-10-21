import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const Quantity = () => {
  const clothQuantity = useSelector(state => state.clothReducer)
  const cart = useSelector(state => state.cartReducer)
  let [quantity, setquantity] = useState(0)

  useEffect(() => {
    for (let i = 0; i < clothQuantity.sizes.length; i++) {
      if (cart.sizeId == clothQuantity.sizes[i].id) {
        for (let j = 0; j < clothQuantity.sizes[i].colors.length; j++) {
          if (cart.colorId == clothQuantity.sizes[i].colors[j].name) {
            console.log(clothQuantity.sizes[i].colors[j].quantity)
            setquantity((quantity = clothQuantity.sizes[i].colors[j].quantity))
          }
        }
      }
    }
  }, [cart.count])
  // const handleQuantity = () => {
  //   console.log(cart)
  // }
  return (
    <div>
      <div>
        <h2>QUANTITY</h2>
        <p>Available Quantity: {quantity}</p>
        <input type={'number'} />
        <hr />
      </div>
    </div>
  )
}
