import { screen } from '@testing-library/react'
import { Close } from '.'
import { componentRender } from '../../render/componentRender'

describe('</Close>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<Close />)
    expect(screen.getByTestId('Close')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})