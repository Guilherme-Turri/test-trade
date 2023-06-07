import { componentRender } from "../../render/componentRender";
import { screen } from '@testing-library/react'
import { ResultsTable } from ".";

describe('<ResultsTable/>', () => {
  const resultsMock = {
    wins: '1',
    draws: '2',
    loses: '3',
    total: '6',
  }
  it('should render on screen properly', () => {
    const { container } = componentRender(<ResultsTable {...resultsMock} />)

    const table = screen.getByTestId('resultsTable')
    const wins = screen.getByText(resultsMock.wins);
    const draws = screen.getByText(resultsMock.draws);
    const loses = screen.getByText(resultsMock.loses);
    const total = screen.getByText(resultsMock.total);
    expect(table).toBeInTheDocument()
    expect(wins).toBeInTheDocument()
    expect(draws).toBeInTheDocument()
    expect(loses).toBeInTheDocument()
    expect(total).toBeInTheDocument()
    expect(container).toMatchSnapshot();
  })

})