import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Footer, NavBar } from './components'
import { MainClothAndChoices } from './containers'
import './App.css'
import { Bag } from 'containers/Bag'

const App = () => {
  return (
    <div>
      <Router>
        <div className={'App'}>
          <NavBar />
        </div>
        <Switch>
          <Route path={'/bag'}>
            <Bag />
          </Route>
          <Route path={'/'}>
            <MainClothAndChoices />
          </Route>
        </Switch>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
