import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Bag, ChatRoom, MainClothAndChoices } from './containers'
import { Footer, NavBar } from './components'

import './App.css'

const App = () => (
  <Router>
    <div className={'App'}>
      <NavBar />
    </div>
    <Switch>
      <Route path={'/bag'} component={Bag}></Route>
      <Route path={'/chat'} component={ChatRoom}></Route>
      <Route path={'/'} component={MainClothAndChoices}></Route>
    </Switch>
    <Footer />
  </Router>
)

export default App
