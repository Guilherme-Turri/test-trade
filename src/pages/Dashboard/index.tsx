import * as Styled from './styles'
import { Header } from "../../templates/Header"
import { CardHolder } from "../../templates/CardHolder"
import { Heading } from '../../components/Heading'

export const Dashboard = () => {
  return (
    <Styled.Container>
      <Header />
      <Heading uppercase={true} big={false} as='h2'>Dashboard</Heading>
      <CardHolder />
    </Styled.Container>

  )
}