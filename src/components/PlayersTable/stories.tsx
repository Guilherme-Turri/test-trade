import { PlayersTable } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'PlayersTable',
  component: PlayersTable,
  args: {
    players: [
      {
        player: {
          name: 'player1',
          age: 25,
          nationality: 'BR',
        }
      },
      {
        player: {
          name: 'player2',
          age: 22,
          nationality: 'ES',
        }
      }
    ]
  }
}

export const Template = (args: any) => {
  return (
    <div>
      <PlayersTable {...args} />
    </div>
  )
}

