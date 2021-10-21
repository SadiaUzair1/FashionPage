import { useSelector } from 'react-redux'

export const Materials = () => {
  const clothMaterial = useSelector(state => state.itemReducer)

  return (
    <div>
      <h3>MATERIAL</h3>
      {Array.from({ length: clothMaterial.materials.length }, (v, i) => (
        <p> {clothMaterial.materials[i].toUpperCase()}</p>
      ))}
      <hr />
    </div>
  )
}
