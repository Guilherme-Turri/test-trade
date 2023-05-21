/* eslint-disable testing-library/no-unnecessary-act */
import { pageRender } from '../render/pageRender'
import { FormLogin } from './FormLogin'
import { act, fireEvent, screen, waitFor, } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import * as fetchDataTest from '../hooks/useFetch'
import * as authLoginTest from '../services/authUser';

jest.setTimeout(10000)

describe('<FormLogin/>', () => {
  const authLoginSpy = jest.spyOn(authLoginTest, 'authUser')
  it('should render on screen properly', () => {
    pageRender(<FormLogin />)
    const enter = screen.getByText('Enter')
    expect(enter).toBeInTheDocument();
  })

  it('should call submitFunction by enter key', () => {
    pageRender(<FormLogin />)
    const form = screen.getByTestId('form')
    const onSubmitMock = jest.fn();
    form.onsubmit = onSubmitMock;
    fireEvent.submit(form);
    expect(onSubmitMock).toHaveBeenCalled();
  })

  it('should call submitFunction by button', () => {
    pageRender(<FormLogin />)
    const form = screen.getByTestId('form')
    const onSubmitMock = jest.fn();
    form.onsubmit = onSubmitMock;
    const btn = screen.getByText('Enter')
    fireEvent.click(btn);
    expect(onSubmitMock).toHaveBeenCalled();
  })

  it('should try to login with wrong Api Key', async () => {
    authLoginSpy.mockResolvedValue({
      response: { status: 200 },
      json: {
        response: [],
        errors: { token: 'Wrong ApiKey' }
      }
    });
    pageRender(<FormLogin />)
    const name = screen.getByPlaceholderText('Nome')
    const apyKey = screen.getByPlaceholderText('ApiKey')
    const button = screen.getByText('Enter')

    act(() => {
      userEvent.type(name, 'testName');
      userEvent.type(apyKey, '123456');
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByText('Wrong ApiKey')).toBeInTheDocument();
    })
  })

  it('should try to login with correct ApiKeyand navigate to dashboard.', async () => {
    const countries = [
      {
        name: 'country1',
        code: 'c1',
        flag: 'flag1'
      },
      {
        name: 'country2',
        code: 'c2',
        flag: 'flag2'
      },
    ]

    authLoginSpy.mockResolvedValue({
      response: { status: 200 },
      json: {
        response: countries,
      }
    });

    pageRender(<FormLogin />)
    const name = screen.getByPlaceholderText('Nome')
    const apyKey = screen.getByPlaceholderText('ApiKey')
    const button = screen.getByText('Enter')

    act(() => {
      userEvent.type(name, 'testName');
      userEvent.type(apyKey, '123456');
      fireEvent.click(button);
    });
    await waitFor(() => {
      expect(window.location.href).toEqual(expect.stringContaining('/dashboard'))
    })
  })
})


describe('<FormLogin/> -  display right actions by the custom hook useFetch', () => {

  it('should display loading on screen', async () => {
    jest.spyOn(fetchDataTest, "useFetchData").mockReturnValue({
      error: null,
      request: jest.fn(),
      loading: true
    });
    pageRender(<FormLogin />)
    const name = screen.getByPlaceholderText('Nome')
    const apyKey = screen.getByPlaceholderText('ApiKey')
    const button = screen.getByText('Enter')

    act(() => {
      userEvent.type(name, 'testName');
      userEvent.type(apyKey, '123456');
      fireEvent.click(button);
    });

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
    pageRender(<FormLogin />)
    const name = screen.getByPlaceholderText('Nome')
    const apyKey = screen.getByPlaceholderText('ApiKey')
    const button = screen.getByText('Enter')

    act(() => {
      userEvent.type(name, 'testName');
      userEvent.type(apyKey, '123456');
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByText('ErrorMsg')).toBeInTheDocument();
    })
  })
})   