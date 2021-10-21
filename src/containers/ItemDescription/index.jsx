import { useSelector } from 'react-redux'

export const ItemDescription = () => {
  const description = useSelector(state => state.itemReducer)

  return (
    <div>
      <p>{description.description}</p>
      {Array.from({ length: description.bullets.length }, (v, i) => (
        <div key={i}>
          <p>
            {'-'} {description.bullets[i]}
          </p>
        </div>
      ))}
    </div>
  )
}
