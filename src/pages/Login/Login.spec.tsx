import { pageRender } from "../../render/pageRender";
import { Login } from ".";
import { screen } from '@testing-library/react'

describe('<Login />', () => {
  it('should render on screen', () => {
    const { container } = pageRender(<Login />)
    const logo = screen.getByText('Meu Time')
    expect(logo).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})