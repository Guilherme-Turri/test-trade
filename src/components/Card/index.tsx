import { TextComponent } from '../TextComponent'
import * as Styled from './styles'

interface CardProps {
  title: string
  img: React.ReactElement
  handleOpen: () => void;
  available: boolean
}

export const Card = ({ title, img, handleOpen, available }: CardProps) => {
  return (
    <Styled.Container data-testid='cardId' available={available} onClick={available ? handleOpen : () => { }}>
      <Styled.Img>{img}</Styled.Img>
      <TextComponent>{title}</TextComponent>
    </Styled.Container>
  )
}