import { componentRender } from "../../render/componentRender";
import { screen } from '@testing-library/react'
import { TextComponent } from ".";

describe('<TextComponent />', () => {
  it('Should render on screen properly', () => {
    const { container } = componentRender(<TextComponent>Test</TextComponent>);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})