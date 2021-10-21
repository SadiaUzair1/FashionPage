import { ClothChoices, ClothImage, ItemFeatures } from 'containers'
import { Div, Main, Main1 } from './styleComponents'

export const MainClothAndChoices = () => {
  return (
    <Div>
      <Main>
        <ClothChoices />
      </Main>
      <Main1>
        <ClothImage />
      </Main1>
      <ItemFeatures />
    </Div>
  )
}
