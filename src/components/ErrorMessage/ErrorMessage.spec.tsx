import { componentRender } from '../../render/componentRender'
import { screen } from '@testing-library/react'
import { ErrorMessage } from './'

describe('<ErrorMessage />', () => {
  it('should render on screen properly', () => {
    const { container } = componentRender(<ErrorMessage>ErrorMsg</ErrorMessage>)
    const msg = screen.getByText('ErrorMsg')
    expect(msg).toBeInTheDocument();
    expect(container).toMatchSnapshot();

  })
})