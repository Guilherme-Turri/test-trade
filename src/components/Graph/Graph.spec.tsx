import { componentRender } from "../../render/componentRender";
import { screen } from '@testing-library/react'
import { Graph } from ".";
describe('<Graph>', () => {

  const graphMock = {
    minute: {
      '0-15': { total: 1 },
      '16-30': { total: 2 },
      '31-45': { total: 3 },
      '46-60': { total: 4 },
      '61-75': { total: 5 },
      '76-90': { total: 6 },
      '91-105': { total: 7 },
      '106-120': { total: 8 },
    }
  }

  it('should render on screen properly', () => {
    const { container } = componentRender(<Graph data={graphMock} />)
    const graph = screen.getByTestId('graph');
    expect(graph).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})