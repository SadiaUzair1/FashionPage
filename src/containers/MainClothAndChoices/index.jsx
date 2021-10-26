import { ClothChoices, ClothImage, ItemFeatures } from 'containers'
import { Div, Left, Center } from './style'

export const MainClothAndChoices = () => (
  <Div>
    <Left>
      <ClothChoices />
    </Left>
    <Center>
      <ClothImage />
    </Center>
    <ItemFeatures />
  </Div>
)
