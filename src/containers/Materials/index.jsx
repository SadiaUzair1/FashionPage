import { useSelector } from 'react-redux'

export const Materials = () => {
  const clothMaterial = useSelector(state => state.clothReducer)

  return (
    <div>
      <h2>MATERIAL</h2>
      {Array.from({ length: clothMaterial.materials.length }, (v, i) => (
        <p> {clothMaterial.materials[i].toUpperCase()}</p>
      ))}
      <hr />
    </div>
  )
}
