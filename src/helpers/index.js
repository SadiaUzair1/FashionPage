export const crossImagePath = '/images/cross.png'
export const imageType = 'image'

export const calculatePrice = price => {
  return price / 100
}

export const CalculateTotalPrice = priceList => {
  let prices = priceList.cart.map(cart => (priceList.price * cart.quantity) / 100)
  return prices.length == 0 ? 0 : prices.reduce((a, b) => a + b)
}

export const setUpdatedValue = (items, cart) => {
  return items.findIndex(size => size.sizeId === cart.sizeId && size.colorId === cart.colorId)
}

export const getItemSizeName = (bagItems, cart) => {
  return bagItems.sizes.find(size => size.id === cart.sizeId).name
}
