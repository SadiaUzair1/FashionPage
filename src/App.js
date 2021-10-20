import { Colors, NavBar } from './components'
import { ClothImage } from './containers'
import './App.css'
const App = () => {
  return (
    <div>
      <div className={'App'}>
        <NavBar />
      </div>
      <div>
        <ClothImage />
      </div>
      <div>
        <Colors />
      </div>
    </div>
  )
}

export default App
