import { screen } from '@testing-library/react'
import { NotFoundLocation } from '.'
import { componentRender } from '../../render/componentRender'

describe('</NotFound>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<NotFoundLocation />)
    expect(screen.getByTestId('NotFoundLocation')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})