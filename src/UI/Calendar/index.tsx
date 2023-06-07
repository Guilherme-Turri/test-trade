import { CalendarDateFill } from '@styled-icons/bootstrap/CalendarDateFill'
import * as Styled from './styles'

interface calendarProps {
  readyToChose: boolean
}

export const Calendar = ({ readyToChose }: calendarProps) => {
  return (
    <Styled.Img data-testid='Calendar' readyToChose={readyToChose}>
      <CalendarDateFill />
    </Styled.Img>
  )
}