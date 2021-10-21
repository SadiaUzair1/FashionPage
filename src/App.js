import { Footer, NavBar } from './components'
import { MainClothAndChoices } from './containers'
import './App.css'

const App = () => {
  return (
    <div>
      <div className={'App'}>
        <NavBar />
      </div>
      <div>
        <MainClothAndChoices />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
