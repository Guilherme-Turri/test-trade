import { Sports } from '@styled-icons/material-outlined/Sports'
import * as Styled from './styles'

interface LeagueProps {
  readyToChose: boolean;
}

export const League = ({ readyToChose }: LeagueProps) => {
  return (
    <Styled.Img data-testid='League' readyToChose={readyToChose}>
      <Sports />
    </Styled.Img>
  )
}
