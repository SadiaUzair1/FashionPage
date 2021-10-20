import { ClothChoices, ClothImage } from 'containers'
import { ItemNameAndPrice } from 'containers/ItemNameAndPrice'
import { Div } from './styleComponents'

export const MainClothAndChoices = () => {
  return (
    <Div d-print-inline-block>
      <ClothChoices />
      <ClothImage />
      <ItemNameAndPrice />
    </Div>
  )
}
