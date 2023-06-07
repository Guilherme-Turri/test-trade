import { screen } from '@testing-library/react'
import { Calendar } from '.'
import { componentRender } from '../../render/componentRender'

describe('</Calendar>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<Calendar readyToChose={true} />)
    expect(screen.getByTestId('Calendar')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
  it('should render on screen with grey color', () => {
    componentRender(<Calendar readyToChose={false} />)
    expect(screen.getByTestId('Calendar')).toBeInTheDocument();
    expect(screen.getByTestId('Calendar')).toHaveStyleRule('color', 'grey');
  })
})