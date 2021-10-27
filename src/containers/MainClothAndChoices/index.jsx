import { ClothChoices, ClothImage, ItemFeatures } from 'containers'
import { Center, Div, Left } from './style'

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
