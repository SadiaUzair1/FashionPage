import { useDispatch, useSelector } from 'react-redux'

import { Div } from './style'

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
            <img src={bagItems.images[0].url} width={120} height={120} />
            <div>
              <h4>{bagItems.name}</h4>
              <main>
                {'price: '} {bagItems.currency.symbol} {''} {bagItems.price / 100} {''}
                {bagItems.currency.title}
              </main>
              <p>
                {'Quantity'} {cart.quantity}
              </p>
              <p>
                {'Color'} {cart.colorId}
              </p>
            </div>
            <input
              onClick={() => {
                handleCart(cart.sizeId)
              }}
              type={'image'}
              src={'/images/cross.png'}
              height={40}
            />
          </Div>
          <hr />
        </div>
      ))}
    </div>
  )
}
