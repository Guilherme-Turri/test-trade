import { pageRender } from "../render/pageRender";
import { ProtectedRoute } from "./ProtectedRoute";
import { screen } from '@testing-library/react'
import * as reactRedux from 'react-redux'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('<ProtectedRoute />', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  it('should render Dashboard when user is logged', () => {
    useSelectorMock.mockReturnValue({
      user: {
        name: 'testUser',
        apiKey: '123'
      },
      parameters: {},
      modal: {
        shouwModal: false
      }
    });
    const { container } = pageRender(<ProtectedRoute />)
    const dash = screen.getByText('Dashboard')
    const user = screen.getByText('Olá, testUser.')
    expect(dash).toBeInTheDocument();
    expect(user).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
  it('should render Login when user is not logged', () => {
    useSelectorMock.mockReturnValue({});
    pageRender(<ProtectedRoute />)
    const logo = screen.getByText('Meu Time')
    expect(logo).toBeInTheDocument();
  })
})