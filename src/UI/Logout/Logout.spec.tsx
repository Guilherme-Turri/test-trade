import { screen } from '@testing-library/react'
import { Logout } from '.'
import { componentRender } from '../../render/componentRender'

describe('</Logout>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<Logout />)
    expect(screen.getByTestId('Logout')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})