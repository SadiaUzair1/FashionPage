import { useDispatch, useSelector } from 'react-redux'

import { Centered, Div, Img, Input } from './style'

export const BagItems = () => {
  const bagItems = useSelector(state => state.itemReducer)
  const dispatch = useDispatch()

  const handleCart = id => {
    dispatch({ type: 'remove', payload: id })
  }

  return (
    <div className={'d-inline-flex'}>
      {bagItems.cart.map((cart, i) => (
        <div key={i}>
          <Div>
            <Img src={bagItems.images[0].url} width={150} height={180} />
            <div>
              <Centered>
                {bagItems.currency.symbol} {''} {bagItems.price / 100} {''}
                {bagItems.currency.title}
                <Input
                  onClick={() => {
                    handleCart(cart.sizeId)
                  }}
                  type={'image'}
                  src={'/images/cross.png'}
                  height={40}
                />
              </Centered>
              <h4>{bagItems.name}</h4>
              <p>
                {'Quantity:'} {cart.quantity}
              </p>
              <p>
                {'Color'} {cart.colorId}
              </p>
            </div>
          </Div>
          <hr />
        </div>
      ))}
    </div>
  )
}
