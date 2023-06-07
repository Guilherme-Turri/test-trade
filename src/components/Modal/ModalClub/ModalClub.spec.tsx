/* eslint-disable testing-library/no-unnecessary-act */
import { pageRender } from "../../../render/pageRender";
import { fireEvent, screen, waitFor, act } from '@testing-library/react'
import { ModalClub } from ".";
import * as reactRedux from 'react-redux'

import * as fetchDataTest from '../../../hooks/useFetch'

jest.setTimeout(10000)

const mockedUseDispatch = jest.fn()
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => mockedUseDispatch
}));

const user = {
  apiKey: '123'
}

const parameters = [
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

describe('</ModalClub>', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  it('should render on screen properly', () => {
    useSelectorMock.mockReturnValue({
      parameters: {
        club: {
          all: parameters
        }
      }
    });
    const { container } = pageRender(<ModalClub />)
    const item = screen.getByText('Club01');
    expect(item).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
  it('Should render on the screen with a message to redo the search.', () => {
    useSelectorMock.mockReturnValue({
      parameters: null
    });
    pageRender(<ModalClub />)
    const item = screen.getByText('Refaça a busca e/ou verifique as requisições diárias');
    expect(item).toBeInTheDocument();
  })
  it('should dispatch selected club into context', () => {
    useSelectorMock.mockReturnValue({
      user,
      parameters: {
        club: {
          all: parameters
        }
      }
    });

    pageRender(<ModalClub />)

    const selectedClub = screen.getByText('Club01');
    act(() => {
      fireEvent.click(selectedClub);
    });

    expect(mockedUseDispatch).toHaveBeenCalledWith({
      "payload": {
        "team": {
          "code": "01",
          "id": "01",
          "logo": "logo/01",
          "name": "Club01",
        }
      }, "type": "parameters/setClub"
    });
  })
})