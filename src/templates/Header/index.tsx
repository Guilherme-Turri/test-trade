import { TextComponent } from '../../components/TextComponent'
import * as Styled from './styles'
export const Header = () => {
  return (
    <Styled.Container>
      <TextComponent>Olá, User</TextComponent>
      <p>Logout</p>
    </Styled.Container>

  )
}