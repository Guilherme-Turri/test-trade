import { pageRender } from "../../render/pageRender";
import { fireEvent, screen } from '@testing-library/react'
import { ModalHolder } from ".";

const mockedUseDispatch = jest.fn()
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockedUseDispatch
}));

describe('<ModalHolder>', () => {
  it('should render on screen prperly with Modal Country and close modal', () => {
    const { container } = pageRender(<ModalHolder type='country' />)
    const CountryModal = screen.getByTestId('countriesContainer')
    expect(CountryModal).toBeInTheDocument();
    const closeBtn = screen.getByTestId('Close')
    fireEvent.click(closeBtn)
    expect(mockedUseDispatch).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  })

  it('should render on screen prperly with Modal Season and close modal', () => {
    pageRender(<ModalHolder type='season' />)
    const CountryModal = screen.getByTestId('modalSeasonId')
    expect(CountryModal).toBeInTheDocument();
    const closeBtn = screen.getByTestId('Close')
    fireEvent.click(closeBtn)
    expect(mockedUseDispatch).toHaveBeenCalled();
  })

  it('should render on screen prperly with Modal League and close modal', () => {
    pageRender(<ModalHolder type='league' />)
    const CountryModal = screen.getByTestId('modalLeagueId')
    expect(CountryModal).toBeInTheDocument();
    const closeBtn = screen.getByTestId('Close')
    fireEvent.click(closeBtn)
    expect(mockedUseDispatch).toHaveBeenCalled();
  })

  it('should render on screen prperly with Modal Club and close modal', () => {
    pageRender(<ModalHolder type='club' />)
    const CountryModal = screen.getByTestId('modalClubId')
    expect(CountryModal).toBeInTheDocument();
    const closeBtn = screen.getByTestId('Close')
    fireEvent.click(closeBtn)
    expect(mockedUseDispatch).toHaveBeenCalled();
  })
})