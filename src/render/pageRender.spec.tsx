import { screen } from '@testing-library/react';
import { pageRender } from './pageRender';

describe('pageRender', () => {
  it('renders children componenet', () => {
    const ChildComponent = () => <p data-testid="child">Child</p>;
    const { container } = pageRender(<ChildComponent />);
    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
