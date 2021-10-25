import { useDispatch, useSelector } from 'react-redux'

import { Div } from './style'

export const BagItems = () => {
  const bagItems = useSelector(state => state.itemReducer)
  const dispatch = useDispatch()

  const handleCart = id => {
    dispatch({ type: 'remove', payload: id })
  }

  return (
    <div>
      <div className={'d-inline-flex'}>
        {Array.from({ length: bagItems.cart.length }, (v, i) => (
          <div>
            <Div key={i}>
              <img src={bagItems.images[0].url} width={120} height={120} />
              <div>
                <h4>{bagItems.name}</h4>
                <main>
                  {'price: '} {bagItems.currency.symbol} {''} {bagItems.price / 100} {''}
                  {bagItems.currency.title}
                </main>
                <p>
                  {'Quantity'} {bagItems.cart[i].quantity}
                </p>
                <p>
                  {'Color'} {bagItems.cart[i].colorId}
                </p>
              </div>
              <input
                onClick={() => {
                  handleCart(bagItems.cart[i].sizeId)
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
    </div>
  )
}
