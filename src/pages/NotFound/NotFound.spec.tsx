import { pageRender } from "../../render/pageRender";
import { NotFound } from ".";
import { screen } from '@testing-library/react'

describe('<NotFound>', () => {
  it('should render on screen properly', () => {
    const { container } = pageRender(<NotFound />)
    const notFound = screen.getByTestId('NotFoundLocation')
    expect(notFound).toBeInTheDocument();
    expect(container).toMatchSnapshot();

  })
  it('should navigate properly', () => {
    pageRender(<NotFound />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })
})