import { componentRender } from "../../render/componentRender";
import { screen } from '@testing-library/react'
import { Footer } from ".";

describe('<Footer />', () => {
  it('Should render on screen properly', () => {
    const { container } = componentRender(<Footer />);
    expect(screen.getByText('Guilherme Turri - Trade Technology')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})