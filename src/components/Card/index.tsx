import { TextComponent } from '../TextComponent'
import * as Styled from './styles'
interface CardProps {
  title: string
  img: React.ReactElement
  handleOpen: () => void;
}

export const Card = ({ title, img, handleOpen }: CardProps) => {
  return (
    <Styled.Container onClick={handleOpen}>
      <Styled.Img >{img}</Styled.Img>
      <TextComponent>{title}</TextComponent>
    </Styled.Container>
  )
}