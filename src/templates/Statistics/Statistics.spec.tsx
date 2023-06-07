/* eslint-disable testing-library/no-unnecessary-act */
import { pageRender } from "../../render/pageRender";
import { Statistics } from ".";
import { screen, act, waitFor } from '@testing-library/react'
import * as reactRedux from 'react-redux'
import * as getStatisticsTest from '../../services/getStatistics';
import * as getChartStatisticsTest from '../../services/getChartStatistics';
import * as fetchDataTest from '../../hooks/useFetch'
import { parameters, mockPlayers, mockStatistcs } from './mock'

jest.setTimeout(10000)

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));


describe('<Statistcs />', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  const getStaticsSpy = jest.spyOn(getStatisticsTest, 'getStatistics')
  const getChartStatisticsSpy = jest.spyOn(getChartStatisticsTest, 'getChartStatistics')

  it('should render on screen properly', async () => {
    useSelectorMock.mockReturnValue({
      user: {
        apiKey: '123'
      },
      modal: {
        showModal: false,
        type: ''
      },
      parameters
    });
    getStaticsSpy.mockResolvedValue({
      response: { status: 200 },
      json: {
        response: mockStatistcs,
      }
    });

    getChartStatisticsSpy.mockResolvedValue({
      response: { status: 200 },
      json: {
        response: mockPlayers,
      }
    });
    await act(async () => {
      const { container } = pageRender(<Statistics />)
      expect(container).toMatchSnapshot();
    })
  });
  it('should render on screen properly getStatits error msg', async () => {
    useSelectorMock.mockReturnValue({
      user: {
        apiKey: '123'
      },
      modal: {
        showModal: false,
        type: ''
      },
      parameters
    });
    getStaticsSpy.mockResolvedValue({
      response: { status: 200 },
      json: {
        errors: { token: 'Verifique novamente a busca' }
      }
    });

    getChartStatisticsSpy.mockResolvedValue({
      response: { status: 200 },
      json: {
        response: mockPlayers,
      }
    });

    await act(async () => {
      pageRender(<Statistics />)
    })
    await waitFor(() => {
      const msg = screen.getByText('Verifique novamente a busca')
      expect(msg).toBeInTheDocument();
    })
  });

  it('should render on screen properly getChartStatits error msg', async () => {
    useSelectorMock.mockReturnValue({
      user: {
        apiKey: '123'
      },
      modal: {
        showModal: false,
        type: ''
      },
      parameters
    });
    getStaticsSpy.mockResolvedValue({
      response: { status: 200 },
      json: {
        response: mockStatistcs
      }
    });

    getChartStatisticsSpy.mockResolvedValue({
      response: { status: 200 },
      json: {
        response: [],
        errors: { token: 'Verifique novamente a busca' }
      }
    });
    await act(async () => {
      pageRender(<Statistics />)
    })
    await waitFor(() => {
      const msg = screen.getByText('Verifique novamente a busca')
      expect(msg).toBeInTheDocument();
    })
  });
})
describe('<Statistics/> -  display right actions by the custom hook useFetch', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  it('should display loading on screen', async () => {
    jest.spyOn(fetchDataTest, "useFetchData").mockReturnValue({
      error: null,
      request: jest.fn(),
      loading: true
    });
    useSelectorMock.mockReturnValue({
      user: {
        apiKey: '123'
      },
      modal: {
        showModal: false,
        type: ''
      },
      parameters
    });

    await act(async () => {
      pageRender(<Statistics />)
    })

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
      user: {
        apiKey: '123'
      },
      modal: {
        showModal: false,
        type: ''
      },
      parameters
    });
    await act(async () => {
      pageRender(<Statistics />)
    })
    await waitFor(() => {
      expect(screen.getByText('ErrorMsg')).toBeInTheDocument();
    })
  })
})   
