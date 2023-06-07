import { Heading } from '../Heading';
import * as Styled from './styles'
import { IPlayer } from '../../types/types'

interface PlayerTableProps {
  players: IPlayer[];
}
export const PlayersTable = ({ players }: PlayerTableProps) => {
  return (
    <Styled.Container data-testid='playersTable'>
      <Heading as='h3' big={false} uppercase={false}>Lista de Jogadores</Heading>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Nacionalidade</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.player.name}</td>
              <td>{player.player.age}</td>
              <td>{player.player.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Styled.Container>
  )
}