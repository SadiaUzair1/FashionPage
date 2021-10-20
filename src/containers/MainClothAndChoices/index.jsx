import { ClothChoices, ClothImage, ItemNameAndPrice } from 'containers'
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
