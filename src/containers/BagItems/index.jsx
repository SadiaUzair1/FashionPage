import { CROSS_IMAGE_PATH, getItemSizeName, IMAGE_TYPE, REMOVE, price } from 'helpers'
import { useDispatch, useSelector } from 'react-redux'

import { Centered, Div, Img, Input } from './style'

export const BagItems = () => {
  const dispatch = useDispatch()
  const bagItems = useSelector(state => state.itemReducer)

  const handleCart = cart => {
    dispatch({ type: REMOVE, payload: cart })
  }

  return (
    <div>
      {bagItems.cart.map((cart, i) => (
        <div key={i}>
          <Div>
            <Img src={bagItems.images[0].url} width={150} height={180} />
            <div>
              <Centered>
                {price(bagItems)}
                <Input
                  onClick={() => {
                    handleCart(cart)
                  }}
                  type={IMAGE_TYPE}
                  src={CROSS_IMAGE_PATH}
                  height={40}
                />
              </Centered>
              <h4>{bagItems.name}</h4>
              <p>{`Quantity: ${cart.quantity}`}</p>
              <p>{`Color: ${cart.colorId.toUpperCase()}`}</p>
              <p>{getItemSizeName(bagItems, cart)}</p>
            </div>
          </Div>
          <hr />
        </div>
      ))}
    </div>
  )
}
