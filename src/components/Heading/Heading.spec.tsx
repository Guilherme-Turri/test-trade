import { componentRender } from "../../render/componentRender";
import { screen } from '@testing-library/react'
import { Heading } from ".";
describe('<Heading />', () => {

  it('should render on screen with Capital Letters', () => {
    componentRender(<Heading uppercase={true} big={false} as='h1'>test</Heading>)
    const msg = screen.getByText('test')
    expect(msg).toHaveStyleRule('text-transform', 'uppercase');
  })
  it('should render on screen with no Capital Letters', () => {
    componentRender(<Heading uppercase={false} big={false} as='h1'>Test</Heading>)
    const msg = screen.getByText('Test')
    expect(msg).toHaveStyleRule('text-transform', 'none');
  })
  it('should render on screen with small size', () => {
    componentRender(<Heading uppercase={false} big={false} as='h1'>Test</Heading>)
    const msg = screen.getByText('Test')
    expect(msg).toHaveStyleRule('font-size', '20px');
  })
  it('should render on screen with big size', () => {
    componentRender(<Heading uppercase={false} big={true} as='h1'>Test</Heading>)
    const msg = screen.getByText('Test')
    expect(msg).toHaveStyleRule('font-size', '60px');
  })
  it('should render on screen as h2', () => {
    componentRender(<Heading uppercase={false} big={true} as='h2'>Test</Heading>)
    const msg = screen.getByRole('heading', { level: 2 })
    expect(msg).toBeInTheDocument();
  })
  it('should render on screen as h3', () => {
    const { container } = componentRender(<Heading uppercase={false} big={true} as='h3'>Test</Heading>)
    const msg = screen.getByRole('heading', { level: 3 })
    expect(msg).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})
