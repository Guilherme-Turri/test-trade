/* eslint-disable testing-library/no-unnecessary-act */
import { pageRender } from "../../../render/pageRender";
import { fireEvent, screen, waitFor, act } from '@testing-library/react'
import { ModalLeague } from ".";
import * as reactRedux from 'react-redux'
import * as getClubTest from '../../../services/getClub';
import * as fetchDataTest from '../../../hooks/useFetch'

jest.setTimeout(10000)

const mockedUseDispatch = jest.fn()
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => mockedUseDispatch
}));

const allLeaguesMock = [
  {
    league: {
      id: '01',
      name: 'league01',
      logo: 'www.league.com/logo01'
    }
  },
  {
    league: {
      id: '02',
      name: 'league02',
      logo: 'www.league.com/logo02'
    }
  },
]

const parameters = {
  league: {
    all: allLeaguesMock,
  }
}
const user = {
  apiKey: '123'
}


describe('<ModalLeague/>', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  const getClubSpy = jest.spyOn(getClubTest, 'getClub');

  it('Should render on screen properly', () => {
    useSelectorMock.mockReturnValue({
      parameters
    });
    const { container } = pageRender(<ModalLeague />)
    const item = screen.getByText('league01');
    expect(item).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
  it('Should render on the screen with a message to redo the search.', () => {
    useSelectorMock.mockReturnValue({
      parameters: null
    });
    pageRender(<ModalLeague />)
    const item = screen.getByText('Refaça a busca e/ou verifique as requisições diárias');
    expect(item).toBeInTheDocument();
  })

  it('should dispatch selected league into context', () => {
    useSelectorMock.mockReturnValue({
      user,
      parameters
    });

    pageRender(<ModalLeague />)

    const selectedLeague = screen.getByText('league01');
    act(() => {
      fireEvent.click(selectedLeague);
    });

    expect(mockedUseDispatch).toHaveBeenCalledWith({
      "payload": {
        "league": {
          "id": "01",
          "logo": "www.league.com/logo01",
          "name": "league01"
        }
      }, "type": "parameters/setLeague"
    });

  })
  it('should fetch all clubs from api and store on context', async () => {
    useSelectorMock.mockReturnValue({
      user,
      parameters
    });

    const allClubsMock = [
      {
        team: {
          id: '01',
          name: 'Club01',
          logo: 'logo/01',
          code: '01'
        },
      },
      {
        team: {
          id: '02',
          name: 'Club02',
          logo: 'logo/02',
          code: '02'
        },
      }
    ]

    getClubSpy.mockResolvedValue({
      response: { status: 200 },
      json: {
        response: allClubsMock
      }
    });

    pageRender(<ModalLeague />)
    const selectedLeague = screen.getByText('league01');

    act(() => {
      fireEvent.click(selectedLeague);
    });

    expect(mockedUseDispatch).toHaveBeenCalledWith({
      "payload": {
        "league": {
          "id": "01",
          "logo": "www.league.com/logo01",
          "name": "league01"
        }
      }, "type": "parameters/setLeague"
    });
    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenNthCalledWith(2, {
        "payload": allClubsMock,
        "type": "parameters/setClubs"
      });
    })
  })

  it('should display error message on getClub', async () => {
    useSelectorMock.mockReturnValue({
      user,
      parameters
    });

    getClubSpy.mockResolvedValue({
      response: { status: 200 },
      json: {
        response: [],
        errors: { token: 'Verifique novamente a busca' }
      }
    });

    pageRender(<ModalLeague />)
    const selectedLeague = screen.getByText('league01');
    act(() => {
      fireEvent.click(selectedLeague);
    });

    expect(mockedUseDispatch).toHaveBeenCalledWith({
      "payload": {
        "league": {
          "id": "01",
          "logo": "www.league.com/logo01",
          "name": "league01"
        }
      }, "type": "parameters/setLeague"
    });
    await waitFor(() => {
      const msg = screen.getByText('Verifique novamente a busca')
      expect(msg).toBeInTheDocument();
    })
  })
})

describe('<ModalLeague/> -  display right actions by the custom hook useFetch', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  it('should display loading on screen', async () => {
    jest.spyOn(fetchDataTest, "useFetchData").mockReturnValue({
      error: null,
      request: jest.fn(),
      loading: true
    });

    useSelectorMock.mockReturnValue({
      user,
      parameters
    });

    pageRender(<ModalLeague />)

    await waitFor(() => {
      expect(screen.getByTestId('Ball')).toBeInTheDocument();
    })
  })

  it('should display errormsg on screen', async () => {
    jest.spyOn(fetchDataTest, "useFetchData").mockReturnValue({
      error: 'ErrorMsg',
      request: jest.fn(),
      loading: false
    });
    useSelectorMock.mockReturnValue({
      user,
      parameters
    });

    pageRender(<ModalLeague />)
    const selectedLeague = screen.getByText('league01');
    act(() => {
      fireEvent.click(selectedLeague);
    });
    await waitFor(() => {
      expect(screen.getByText('ErrorMsg')).toBeInTheDocument();
    })
  })
})   