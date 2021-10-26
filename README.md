

# PROJECT DAILY PRODUCT

## Demo
[Click Here to view](https://frosty-meninsky-fac17c.netlify.app/).

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v12.10.0

    $ npm --version
    6.11.3

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs


## Install

    $ npm install


## Start & watch

    $ npm start


## Languages & tools

### Templating

- [HTML](http://jade-lang.com/) for some structuring.

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.
- [React Redux]([https://react-redux.js.org/](https://react-redux.js.org/)) is used for application state management.

### CSS

- [Style Components]https://styled-components.com/) is used to write futureproof CSS for CSS vendor prefix under the hood).

## Notes

- I have implemented the product detail page with proper add to bag functionality.
- I have not used any library like jquery or lodash. Whereas jquery is not recommented in react as it directly affects Actual DOM but react is running on Virtual DOM.
- I have added quality in sample json that you provided.
- I have deployed it on [Netlify](https://frosty-meninsky-fac17c.netlify.app/).
- I have added colors with quantity in each sizes to make the case more realistic.
- This is the sample json:
```
product: {
  id: 890,
  sizes: [
    {
      id: 123,
      name: 'Small',
      abbreviation: 'S',
      colors: [
        { name: 'red', quantity: 57 },
        { name: 'black', quantity: 7 }
      ]
    },
    {
      id: 234,
      name: 'Medium',
      abbreviation: 'M',
      colors: [
        { name: 'black', quantity: 27 },
        { name: 'blue', quantity: 17 }
      ]
    },
    {
      id: 345,
      name: 'Large',
      abbreviation: 'L',
      colors: [
        { name: 'red', quantity: 8 },
        { name: 'blue', quantity: 22 }
      ]
    },
    {
      id: 456,
      name: 'X-Large',
      abbreviation: 'XL',
      colors: [
        { name: 'red', quantity: 5 },
        { name: 'orange', quantity: 2 }
      ]
    }
  ],
  colors: ['black', 'red', 'orange', 'blue'],
  name: 'The Special Pantsuit',
  description:
    'This is the coolest pantsuit you"ve ever seen. Fits like a dream. Wear this everywhere, and nowhere.',
  bullets: [
    'So baggy and yet hugs all the right places',
    'Big hidden pockets',
    'Front zipper so you can zip yourself in',
    'Silk material, reinforced stitching'
  ],
  images: [
    { order: 0, url: 'images/jumpsuit-1.jpg' },
    { order: 1, url: 'images/jumpsuit-2.jpg' },
    { order: 2, url: 'images/jumpsuit-3.jpg' },
    { order: 3, url: 'images/jumpsuit-4.jpg' },
    { order: 4, url: 'images/jumpsuit-5.jpg' }
  ],
  materials: ['silk'],
  price: 12000,
  sizeInfo:
    'These are sized a little small. We advise ordering the next size up from what you normally wear.',
  materialInfo:
    '100% silk which feels very nice. These are meant to be warn slightly baggy so that they are comfortable. Zipper front with rolled up sleeves. Hip pockets on the front.',
  modal: {
    isOpen: false,
    type: '',
    sizeId: 0
  },
  cart: [{ quantity: 2, colorId: 'black', sizeId: 123 }],
  currency: {
    symbol: '$',
    title: 'USD'
  }
}
```