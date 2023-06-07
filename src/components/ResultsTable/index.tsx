import * as Styled from './styles'
interface ResultsTableProps {
  wins: string,
  draws: string,
  loses: string,
  total: string,
}

export const ResultsTable = ({ wins, draws, loses, total }: ResultsTableProps) => {
  return (
    <Styled.Container data-testid='resultsTable'>
      <table>
        <thead>
          <tr>
            <th>Vitórias</th>
            <th>Derrotas</th>
            <th>Empates</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{wins}</td>
            <td >{loses}</td>
            <td>{draws}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </Styled.Container>
  )
}