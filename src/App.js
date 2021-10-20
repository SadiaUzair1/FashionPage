import { NavBar } from './components'
import { Colors, MainClothAndChoices } from './containers'
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
        <Colors />
      </div>
    </div>
  )
}

export default App
