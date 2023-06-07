import { VictoryChart, VictoryBar } from 'victory'
import * as Styled from './styles'
import { Heading } from '../Heading'
import { IGraph } from '../../types/types'

interface GraphProps {
  data: IGraph
}

export const Graph = ({ data }: GraphProps) => {

  const arrOfData = Object.entries(data.minute).map((item: any) => {
    return {
      x: item[0],
      y: item[1].total
    }
  })

  return (

    < Styled.Container data-testid='graph'>
      <Heading as='h3' big={false} uppercase={false}>Gols em Minutos</Heading>
      <VictoryChart
        padding={{ top: 5, bottom: 50, left: 50, right: 50 }}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}>
        <VictoryBar
          data={arrOfData} ></VictoryBar>
      </VictoryChart>
    </Styled.Container >
  )

}