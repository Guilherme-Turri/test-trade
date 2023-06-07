import { screen } from '@testing-library/react'
import { League } from '.'
import { componentRender } from '../../render/componentRender'

describe('</League>', () => {
  it('should render on screen', () => {
    const { container } = componentRender(<League readyToChose={true} />)
    expect(screen.getByTestId('League')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
  it('should render on screen with grey color', () => {
    componentRender(<League readyToChose={false} />)
    expect(screen.getByTestId('League')).toBeInTheDocument();
    expect(screen.getByTestId('League')).toHaveStyleRule('color', 'grey');
  })
})