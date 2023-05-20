import { componentRender } from "../../render/componentRender";
import { screen } from '@testing-library/react'
import { SubmitButton } from ".";
import { theme } from "../../styles/theme";

describe('<SubmitButton/>', () => {

  it('should render on screen properly', () => {
    const { container } = componentRender(<SubmitButton>btn</SubmitButton>)
    const btn = screen.getByText('btn')
    expect(btn).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
  it('should render on screen enable', () => {
    componentRender(<SubmitButton apiKey="123456" userName="test" error="">btn</SubmitButton>)
    const btn = screen.getByText('btn')
    expect(btn).toHaveStyleRule('color', theme.color.backgroundColor);
  })
})