import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as Styled from './styles'

export const Close = () => {
  return (
    <Styled.Img data-testid='Close'>
      <CloseOutline />
    </Styled.Img>
  )
}