import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Notification from 'react-notify-toast'

import { Bag, ChatMessages, MainClothAndChoices } from './containers'
import { Footer, NavBar } from './components'

import './App.css'

const App = () => (
  <Router>
    <div className={'App'}>
      <NavBar />
      <Notification />
      {/* {notify.show('hello world')} */}
    </div>
    <Switch>
      <Route path={'/bag'} component={Bag}></Route>
      <Route path={'/'} component={MainClothAndChoices}></Route>
    </Switch>
    <ChatMessages />
    <Footer />
  </Router>
)

export default App
