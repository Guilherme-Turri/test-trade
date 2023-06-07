import { pageRender } from "../../render/pageRender";
import { Dashboard } from ".";
import { screen } from '@testing-library/react'
import * as reactRedux from 'react-redux'


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
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
        id: '01',
        name: 'LeagueName'
      }
    }
  },
  club: {
    selected: {
      team: {
        id: '01',
        name: 'ClubName',
        logo: 'ClubLogo'
      }
    }
  }
}


describe('<Dashboard />', () => {
  const useSelectorMock = reactRedux.useSelector as jest.Mock;

  it('should render on screen without statistcs', () => {
    useSelectorMock.mockReturnValue({
      modal: {
        showModal: false,
        type: ''
      },
      parameters: {}
    });

    const { container } = pageRender(<Dashboard />)
    const dash = screen.getByText('Dashboard')
    const header = screen.getByTestId('HeaderContainer')
    const cardHolder = screen.getByTestId('CardHolderContainer')
    expect(dash).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(cardHolder).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
  it('should render on screen with statistcs', () => {
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

    pageRender(<Dashboard />)
    const dash = screen.getByText('Dashboard')
    const statistics = screen.getByTestId('loadingStatistics')
    const header = screen.getByTestId('HeaderContainer')
    const cardHolder = screen.getByTestId('CardHolderContainer')
    expect(dash).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(cardHolder).toBeInTheDocument();
    expect(statistics).toBeInTheDocument();
  })
})