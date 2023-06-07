import { screen } from '@testing-library/react';
import { componentRender } from './componentRender';

describe('componentRender', () => {
  it('renders children componenet', () => {
    const ChildComponent = () => <p data-testid="child">Child</p>;
    const { container } = componentRender(<ChildComponent />);
    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
