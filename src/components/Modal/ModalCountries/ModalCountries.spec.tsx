/* eslint-disable testing-library/no-unnecessary-act */
import { pageRender } from "../../../render/pageRender";
import { fireEvent, screen, waitFor, act } from '@testing-library/react'
import { ModalCountries } from ".";
import * as reactRedux from 'react-redux'
import * as getSeasonTest from '../../../services/getSeason';
import * as fetchDataTest from '../../../hooks/useFetch'

jest.setTimeout(10000)

const mockedUseDispatch = jest.fn()
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => mockedUseDispatch
}));

const allCountriesMock = [
  {
    code: 'BR',
    flag: 'www.flag/BR'
  },
  {
    code: 'ES',
    flag: 'www.flag/ES'
  },
]

const user = {
  apiKey: '123'
}

describe('<ModalCountries/>', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  const getSeasonspy = jest.spyOn(getSeasonTest, 'getSeason');

  it('should render on screen properly!', () => {
    useSelectorMock.mockReturnValue({
      parameters: {
        country: {
          all: allCountriesMock
        }
      }
    });

    const { container } = pageRender(<ModalCountries />)
    const item = screen.getByText('BR');
    expect(item).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })

  it('Should render on the screen with a message to redo the search.', () => {
    useSelectorMock.mockReturnValue({
      parameters: null
    });
    pageRender(<ModalCountries />)
    const item = screen.getByText('Refaça a busca e/ou verifique as requisições diárias');
    expect(item).toBeInTheDocument();
  })

  it('should dispatch selected country into context', () => {
    useSelectorMock.mockReturnValue({
      user,
      parameters: {
        country: {
          all: allCountriesMock
        }
      }
    });

    pageRender(<ModalCountries />)

    const selectedCountry = screen.getByText('BR');
    act(() => {
      fireEvent.click(selectedCountry);
    });

    expect(mockedUseDispatch).toHaveBeenCalledWith({
      "payload": {
        "code": "BR",
        "flag": 'www.flag/BR'
      }, "type": "parameters/setCountry"
    });

  })
  it('should fetch all seasons from api and store on context', async () => {
    useSelectorMock.mockReturnValue({
      user,
      parameters: {
        country: {
          all: allCountriesMock
        }
      }
    });

    getSeasonspy.mockResolvedValue({
      response: { status: 200 },
      json: {
        response: ['2010', '2011', '2012']
      }
    });

    pageRender(<ModalCountries />)
    const selectedCountry = screen.getByText('BR');
    act(() => {
      fireEvent.click(selectedCountry);
    });

    expect(mockedUseDispatch).toHaveBeenCalledWith({
      "payload": {
        "code": "BR",
        "flag": 'www.flag/BR'
      }, "type": "parameters/setCountry"
    });

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenNthCalledWith(2, {
        "payload": ['2010', '2011', '2012'],
        "type": "parameters/setSeasons"
      });
    })
  })

  it('should display error message on getSeason', async () => {
    useSelectorMock.mockReturnValue({
      user,
      parameters: {
        country: {
          all: allCountriesMock
        }
      }
    });

    getSeasonspy.mockResolvedValue({
      response: { status: 200 },
      json: {
        response: [],
        errors: { token: 'Verifique novamente a busca' }
      }
    });

    pageRender(<ModalCountries />)
    const selectedCountry = screen.getByText('BR');
    act(() => {
      fireEvent.click(selectedCountry);
    });

    expect(mockedUseDispatch).toHaveBeenCalledWith({
      "payload": {
        "code": "BR",
        "flag": 'www.flag/BR'
      }, "type": "parameters/setCountry"
    });

    await waitFor(() => {
      const msg = screen.getByText('Verifique novamente a busca')
      expect(msg).toBeInTheDocument();
    })
  })
})

describe('<ModalCountries/> -  display right actions by the custom hook useFetch', () => {

  const useSelectorMock = reactRedux.useSelector as jest.Mock;

  it('should display loading on screen', async () => {
    jest.spyOn(fetchDataTest, "useFetchData").mockReturnValue({
      error: null,
      request: jest.fn(),
      loading: true
    });

    useSelectorMock.mockReturnValue({
      user,
      parameters: {
        country: {
          all: allCountriesMock
        }
      }
    });

    pageRender(<ModalCountries />)

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
      parameters: {
        country: {
          all: allCountriesMock
        }
      }
    });

    pageRender(<ModalCountries />)
    const selectedCountry = screen.getByText('BR');
    act(() => {
      fireEvent.click(selectedCountry);
    });
    await waitFor(() => {
      expect(screen.getByText('ErrorMsg')).toBeInTheDocument();
    })
  })
})   