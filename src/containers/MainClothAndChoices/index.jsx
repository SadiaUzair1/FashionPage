import { ClothChoices, ClothImage, ItemNameAndPrice } from 'containers'
import { Div, Main, Main1 } from './styleComponents'

export const MainClothAndChoices = () => {
  return (
    <Div d-print-inline-block>
      <Main>
        <ClothChoices />
      </Main>
      <Main1>
        <ClothImage />
      </Main1>
      <ItemNameAndPrice />
    </Div>
  )
}
