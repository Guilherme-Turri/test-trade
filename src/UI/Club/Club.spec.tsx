import { screen } from '@testing-library/react'
import { Club } from '.'
import { componentRender } from '../../render/componentRender'

describe('</Club>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<Club readyToChose={true} />)
    expect(screen.getByTestId('Club')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
  it('should render on screen with grey color', () => {
    componentRender(<Club readyToChose={false} />)
    expect(screen.getByTestId('Club')).toBeInTheDocument();
    expect(screen.getByTestId('Club')).toHaveStyleRule('color', 'grey');
  })
})