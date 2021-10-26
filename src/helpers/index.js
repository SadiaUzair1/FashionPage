export const ADD = 'add'
export const COLOR = 'color'
export const CROSS_IMAGE_PATH = '/images/cross.png'
export const DECREASE_ITEM_QUANTITY = 'decreaseItemQuantity'
export const DECREASE_QUANTITY = 'decreaseQuantity'
export const EMAIL = 'example@example.com'
export const IMAGE_TYPE = 'image'
export const INCREASE_QUANTITY = 'increaseQuantity'
export const REMOVE = 'remove'
export const RESET = 'reset'
export const RESET_CART = 'resetCart'
export const RESET_QUANTITY = 'resetQuantity'
export const SIZE = 'size'

export const calculatePrice = price => price / 100

export const calculateTotalPrice = priceList => {
  let prices = priceList.cart.map(cart => (priceList.price * cart.quantity) / 100)
  return prices.length == 0 ? 0 : prices.reduce((a, b) => a + b)
}

export const setUpdatedValue = (items, cart) =>
  items.findIndex(size => size.sizeId === cart.sizeId && size.colorId === cart.colorId)

export const getItemSizeName = (bagItems, cart) =>
  bagItems.sizes.find(size => size.id === cart.sizeId).name
