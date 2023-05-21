import { screen } from '@testing-library/react'
import { Ball } from '.'
import { componentRender } from '../../render/componentRender'

describe('</Add>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<Ball />)
    expect(screen.getByTestId('Ball')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})