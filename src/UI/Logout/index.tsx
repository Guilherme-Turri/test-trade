import { Exit } from '@styled-icons/ionicons-solid/Exit'
import * as Styled from './styles'

export const Logout = () => {
  return (
    <Styled.Img data-testid='Logout'>
      <Exit />
    </Styled.Img>
  )
}