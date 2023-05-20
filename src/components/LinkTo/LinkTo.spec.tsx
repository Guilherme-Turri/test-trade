import { componentRender } from "../../render/componentRender";
import { screen } from '@testing-library/react'
import { LinkTo } from ".";

describe('<LinkTo/>', () => {
  it('should render on screen properly', () => {
    const { container } = componentRender(<LinkTo href='www.google.com'>Link</LinkTo>)
    const link = screen.getByText('Link')
    expect(link).toHaveAttribute('href', 'www.google.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(container).toMatchSnapshot();
  })
})