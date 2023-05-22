import { TextComponent } from '../TextComponent'
import * as Styled from './styles'

interface CardProps {
  title: string
  img: React.ReactElement
}

export const Card = ({ title, img }: CardProps) => {
  return (
    <Styled.Container>
      <Styled.Img>{img}</Styled.Img>
      <TextComponent>{title}</TextComponent>
    </Styled.Container>
  )
}