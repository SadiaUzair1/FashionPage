import { useSelector } from 'react-redux'

export const ItemDescription = () => {
  const description = useSelector(state => state.itemReducer)

  return (
    <div>
      <p>{description.description}</p>
      {description.bullets.map((bullet, i) => (
        <div key={i}>
          <p>
            <li> {bullet} </li>
          </p>
        </div>
      ))}
    </div>
  )
}
