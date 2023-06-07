import { componentRender } from '../../render/componentRender'
import { screen, fireEvent } from '@testing-library/react'
import { Card } from './'

describe('</Card>', () => {
  const cardProps = {
    title: 'cardTitle',
    img: <img src="test.jpg" alt="Test" />,
    handleOpen: jest.fn(),
    available: true,
  }
  it('should render properly and avaliable to click', () => {
    componentRender(<Card {...cardProps} />)
    const title = screen.getByText('cardTitle');
    const alt = screen.queryByAltText('Test');
    const card = screen.getByTestId('cardId')
    expect(title).toBeInTheDocument();
    expect(alt).toBeInTheDocument();
    fireEvent.click(card);
    expect(cardProps.handleOpen).toHaveBeenCalled();;
  })
  it('should render properly and not avaliable to click', () => {
    cardProps.available = false;
    const { container } = componentRender(<Card {...cardProps} />)
    const title = screen.getByText('cardTitle');
    const alt = screen.queryByAltText('Test');
    const card = screen.getByTestId('cardId')
    expect(title).toBeInTheDocument();
    expect(alt).toBeInTheDocument();
    fireEvent.click(card);
    expect(cardProps.handleOpen).not.toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  })
})
