import { screen } from '@testing-library/react'
import { NotFound } from '.'
import { componentRender } from '../../render/componentRender'

describe('</NotFound>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<NotFound />)
    expect(screen.getByTestId('NotFound')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})