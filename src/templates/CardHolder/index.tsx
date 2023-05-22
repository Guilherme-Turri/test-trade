import * as Styled from './styles'
import { Card } from '../../components/Card'
import { Earth } from '../../UI/Earth'
import { Club } from '../../UI/Club'
import { League } from '../../UI/League'


export const CardHolder = () => {
  return (
    <Styled.Container>
      <Card title='Selecione o pais' img={<Earth />}></Card>
      <Card title='Selecione a liga' img={<League />}></Card>
      <Card title='Selecione o clube' img={<Club />}></Card>
    </Styled.Container >
  )
}