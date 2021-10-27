export const ADD = 'add'
export const COLOR = 'color'
export const CONTACT_EMAIL = 'example@example.com'
export const CROSS_IMAGE_PATH = '/images/cross.png'
export const DECREASE_ITEM_QUANTITY = 'decreaseItemQuantity'
export const DECREASE_QUANTITY = 'decreaseQuantity'
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

export const calculateTotalQuantity = (itemSizes, cartItem) => {
  let selectedSize = itemSizes.find(size => size.id === cartItem.sizeId)
  return [...selectedSize.colors].reduce((a, b) => a.quantity + b.quantity)
}

export const getItemSizeName = (bagItems, cart) =>
  bagItems.sizes.find(size => size.id === cart.sizeId).name

export const totalPrice = (currency, totalPrice) =>
  `${currency.currency.symbol} ${totalPrice} ${currency.currency.title}`

export const renderPrice = bagItems =>
  `${bagItems.currency.symbol}  ${calculatePrice(bagItems.price)} ${bagItems.currency.title}`

export const setUpdatedValue = (items, cart) =>
  items.findIndex(size => size.sizeId === cart.sizeId && size.colorId === cart.colorId)
