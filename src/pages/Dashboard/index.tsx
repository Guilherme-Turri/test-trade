import * as Styled from './styles'
import { Header } from "../../templates/Header"
import { CardHolder } from "../../templates/CardHolder"
import { Heading } from '../../components/Heading'
import { RootState } from '../../storage/store'
import { useSelector } from 'react-redux'
import { Statistics } from '../../templates/Statistics'

export const Dashboard = () => {
  const { parameters } = useSelector((state: RootState) => state.parameters);

  const readytoShowResults = [parameters?.club?.selected?.team.id, parameters?.league?.selected?.league.id, parameters?.season?.selected].every(value => value !== undefined && value !== null)

  return (
    <Styled.Container>
      <Header />
      <Heading uppercase={true} big={false} as='h2'>Dashboard</Heading>
      <CardHolder />
      {readytoShowResults && <Statistics></Statistics>}
    </Styled.Container>

  )
}