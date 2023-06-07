import { SportsClub } from '@styled-icons/entypo/SportsClub'
import * as Styled from './styles'

interface ClubProps {
  readyToChose: boolean
}


export const Club = ({ readyToChose }: ClubProps) => {
  return (
    <Styled.Img data-testid='Club' readyToChose={readyToChose}>
      <SportsClub />
    </Styled.Img>
  )
}