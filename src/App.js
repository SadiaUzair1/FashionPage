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
      <Route path={'/bag'}>
        <Bag />
      </Route>
      <Route path={'/chat'}>
        <ChatRoom />
      </Route>
      <Route path={'/'}>
        <MainClothAndChoices />
      </Route>
    </Switch>
    <Footer />
  </Router>
)

export default App
