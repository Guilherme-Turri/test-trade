import { componentRender } from "../../render/componentRender";
import { screen } from '@testing-library/react'
import { PlayersTable } from ".";

describe('<PlayersTable/>', () => {
  const mockPlayers = [
    {
      player: {
        name: 'playerName1',
        age: 25,
        nationality: 'Brazil',
      },
    }
  ];

  it('should render on screen properly', () => {
    const { container } = componentRender(<PlayersTable players={mockPlayers} />)
    const table = screen.getByTestId('playersTable')
    const playerName = screen.getByText('playerName1')
    expect(table).toBeInTheDocument()
    expect(playerName).toBeInTheDocument()
    expect(container).toMatchSnapshot();
  });

})
