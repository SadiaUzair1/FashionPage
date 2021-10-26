import { ClothChoices, ClothImage, ItemFeatures } from 'containers'
import { Div, Main, Main1 } from './style'

export const MainClothAndChoices = () => (
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
