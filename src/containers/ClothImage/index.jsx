import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const ClothImage = () => {
  const dispatch = useDispatch()
  const selectedCloth = useSelector(state => state.itemReducer)

  useEffect(() => {
    dispatch({ type: 'image', payload: 0 })
  }, [])

  return (
    <div className={'ml-5'}>
      <img src={selectedCloth.type} width={550} height={700} />
    </div>
  )
}
