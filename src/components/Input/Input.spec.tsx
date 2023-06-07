/* eslint-disable testing-library/no-unnecessary-act */
import { componentRender } from "../../render/componentRender";
import { screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { Input } from ".";

describe('<Input />', () => {
  const mockValues = {
    type: 'text',
    name: 'nome',
    onChange: jest.fn(),
    error: '',
    value: ''
  }
  it('should render on screen properly', () => {
    const { container } = componentRender(<Input {...mockValues} />)
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })

  it('should render on screen whith error message', () => {
    mockValues.error = 'errorMsg'
    componentRender(<Input {...mockValues} />)
    const input = screen.getByTestId('Input');
    act(() => {
      userEvent.type(input, 'u');
      input.blur();
    });
    const errorMessage = screen.getByText('errorMsg');
    expect(errorMessage).toBeInTheDocument();
  })
})