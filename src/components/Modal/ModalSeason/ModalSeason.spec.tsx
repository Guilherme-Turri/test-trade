/* eslint-disable testing-library/no-unnecessary-act */
import { pageRender } from "../../../render/pageRender";
import { fireEvent, screen, waitFor, act } from '@testing-library/react'
import { ModalSeason } from ".";
import * as reactRedux from 'react-redux'
import * as getLeagueTest from '../../../services/getLeague';
import * as fetchDataTest from '../../../hooks/useFetch'

jest.setTimeout(10000)

const mockedUseDispatch = jest.fn()
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => mockedUseDispatch
}));

const parametersMock = {
  season: {
    all: ['2020', '2021', '2022', '2023']
  }
}
const userMock = {
  apiKey: '123'
}

describe('<ModalSeason/>', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  const getLeaguesSpy = jest.spyOn(getLeagueTest, 'getLeague');

  it('Should render on screen properly', () => {
    useSelectorMock.mockReturnValue({
      parameters: parametersMock
    });
    const { container } = pageRender(<ModalSeason />)
    const item = screen.getByText('2020');
    expect(item).toBeInTheDocument();
    expect(container).toMatchSnapshot();

  })
  it('Should render on the screen with a message to redo the search.', () => {
    useSelectorMock.mockReturnValue({
      parameters: null
    });
    pageRender(<ModalSeason />)
    const item = screen.getByText('Refaça a busca e/ou verifique as requisições diárias');
    expect(item).toBeInTheDocument();
  })

  it('should dispatch selected season into context', () => {
    useSelectorMock.mockReturnValue({
      user: userMock,
      parameters: parametersMock
    });

    pageRender(<ModalSeason />)

    const selectedSeason = screen.getByText('2020');
    act(() => {
      fireEvent.click(selectedSeason);
    });

    expect(mockedUseDispatch).toHaveBeenCalledWith({
      "payload": '2020',
      "type": "parameters/setSeason"
    });

  })

  it('should fetch all leagues from api and store on context', async () => {
    useSelectorMock.mockReturnValue({
      user: userMock,
      parameters: parametersMock
    });

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

    getLeaguesSpy.mockResolvedValue({
      response: { status: 200 },
      json: {
        response: allLeaguesMock
      }
    });

    pageRender(<ModalSeason />)
    const selectedSeason = screen.getByText('2020');
    act(() => {
      fireEvent.click(selectedSeason);
    });

    expect(mockedUseDispatch).toHaveBeenCalledWith({
      "payload": '2020', "type": "parameters/setSeason"
    });


    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenNthCalledWith(2, {
        "payload": allLeaguesMock,
        "type": "parameters/setLeagues"
      });
    })
  })

  it('should display error message on getSeason', async () => {
    useSelectorMock.mockReturnValue({
      user: userMock,
      parameters: parametersMock
    });

    getLeaguesSpy.mockResolvedValue({
      response: { status: 200 },
      json: {
        response: [],
        errors: { token: 'Verifique novamente a busca' }
      }
    });
    pageRender(<ModalSeason />)
    const selectedSeason = screen.getByText('2020');
    act(() => {
      fireEvent.click(selectedSeason);
    });

    expect(mockedUseDispatch).toHaveBeenCalledWith({
      "payload": '2020', "type": "parameters/setSeason"
    });
    await waitFor(() => {
      const msg = screen.getByText('Verifique novamente a busca')
      expect(msg).toBeInTheDocument();
    })
  })
})

describe('<ModalSeason/> -  display right actions by the custom hook useFetch', () => {

  const useSelectorMock = reactRedux.useSelector as jest.Mock;

  it('should display loading on screen', async () => {
    jest.spyOn(fetchDataTest, "useFetchData").mockReturnValue({
      error: null,
      request: jest.fn(),
      loading: true
    });

    useSelectorMock.mockReturnValue({
      user: userMock,
      parameters: parametersMock
    });

    pageRender(<ModalSeason />)

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
      user: userMock,
      parameters: parametersMock
    });

    pageRender(<ModalSeason />)
    const selectedCountry = screen.getByText('2020');
    act(() => {
      fireEvent.click(selectedCountry);
    });
    await waitFor(() => {
      expect(screen.getByText('ErrorMsg')).toBeInTheDocument();
    })
  })
})   