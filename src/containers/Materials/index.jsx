import { useSelector } from 'react-redux'

export const Materials = () => {
  const clothMaterial = useSelector(state => state.itemReducer.materials)

  return (
    <div>
      <h3>MATERIAL</h3>
      {clothMaterial.map((material, i) => (
        <p key={i}> {material.toUpperCase()}</p>
      ))}
      <hr />
    </div>
  )
}
