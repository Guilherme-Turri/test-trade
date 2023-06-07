import { screen } from '@testing-library/react'
import { Earth } from '.'
import { componentRender } from '../../render/componentRender'

describe('</Earth>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<Earth />)
    expect(screen.getByTestId('Earth')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})