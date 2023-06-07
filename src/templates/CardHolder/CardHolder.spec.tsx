import { pageRender } from '../../render/pageRender'
import { CardHolder } from '.'
import { screen, fireEvent } from '@testing-library/react'
import * as reactRedux from 'react-redux'


const mockedUseDispatch = jest.fn()
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => mockedUseDispatch
}));


const parameters = {
  country: {
    selected: {
      name: 'Brazil',
      flag: 'www.flag/BR'
    }
  },
  season: {
    selected: '2020'
  },
  league: {
    selected: {
      league: {
        name: 'testLeague',
        logo: 'www.flag/Brasileirao'
      }
    }
  },
  club: {
    selected: {
      team: {
        name: 'testClub',
        logo: 'www.flag/testClub'
      }
    }
  }
}

describe('<CardHolder>', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  it('hould render on screen cards with no context', () => {
    useSelectorMock.mockReturnValue({
      modal: {
        showModal: false,
        type: ''
      },
      parameters: {}
    });
    const { container } = pageRender(<CardHolder />)
    const countryCard = screen.getByText('Selecione o país')
    const seasonCard = screen.getByText('Selecione a temporada')
    const leagueCard = screen.getByText('Selecione a liga')
    const clubCard = screen.getByText('Selecione o clube')
    expect(countryCard).toBeInTheDocument();
    expect(seasonCard).toBeInTheDocument();
    expect(leagueCard).toBeInTheDocument();
    expect(clubCard).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })

  it('should render on screen cards with context and call modalContext on click', () => {
    useSelectorMock.mockReturnValue({
      modal: {
        showModal: false,
        type: ''
      },
      parameters
    });

    pageRender(<CardHolder />)

    const countryCard = screen.getByText('Brazil')
    const seasonCard = screen.getByText('2020')
    const leagueCard = screen.getByText('testLeague')
    const clubCard = screen.getByText('testClub')
    expect(countryCard).toBeInTheDocument();
    expect(seasonCard).toBeInTheDocument();
    expect(leagueCard).toBeInTheDocument();
    expect(clubCard).toBeInTheDocument();

    fireEvent.click(countryCard);
    expect(mockedUseDispatch).toHaveBeenCalled();

    fireEvent.click(seasonCard);
    expect(mockedUseDispatch).toHaveBeenCalled();

    fireEvent.click(leagueCard);
    expect(mockedUseDispatch).toHaveBeenCalled();

    fireEvent.click(clubCard);
    expect(mockedUseDispatch).toHaveBeenCalled();
  })

  it('should render on screen cards with modal context', () => {
    useSelectorMock.mockReturnValue({
      modal: {
        showModal: true,
        type: ''
      },
      parameters: {}
    });

    pageRender(<CardHolder />)
    const modalHolder = screen.getByTestId('modalHolderId')
    expect(modalHolder).toBeInTheDocument()
  })
})