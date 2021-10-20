import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const ClothImage = () => {
  const dispatch = useDispatch()
  const selectedCloth = useSelector(state => state.clothReducer)

  useEffect(() => {
    dispatch({ type: 0 })
  }, [])

  return (
    <div className={'ml-5'}>
      <img src={selectedCloth.type} width={550} height={600} />
    </div>
  )
}