import { useSelector } from 'react-redux'

export const Colors = () => {
  const selectedColors = useSelector(state => state.colorReducer)
  console.log(selectedColors)
  return (
    <div>
      <input type={'image'} src={'/images/colors/yellow.png'} height={20} />
    </div>
  )
}
