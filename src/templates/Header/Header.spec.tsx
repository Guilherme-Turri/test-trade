import { Header } from '.'
import { pageRender } from '../../render/pageRender'
import { fireEvent, screen } from '@testing-library/react'
import * as reactRedux from 'react-redux'


const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('<Header />', () => {

  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

  it('should render on screen properly', () => {
    useSelectorMock.mockReturnValue({
      user: {
        name: 'testUser',
        apiKey: "123456",
      }
    });
    const { container } = pageRender(<Header />)
    const name = screen.getByText('Olá, testUser.')
    expect(name).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })

  it('should call logout actions', () => {
    useSelectorMock.mockReturnValue({
      user: {
        name: 'testUser',
        apiKey: "123456",
      }
    });
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)

    pageRender(<Header />)
    const logoutBtn = screen.getByTestId('Logout')
    fireEvent.click(logoutBtn);
    expect(dummyDispatch).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');

  })
})