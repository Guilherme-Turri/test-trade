import React from 'react';
import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/SubmitButton";
import { useFetchData } from "../../hooks/useFetch";
import { useInput } from "../../hooks/useInput";
import { authUser } from "../../services/authUser";
import * as Styled from './styles'
import { ErrorMessage } from '../../components/ErrorMessage';
import { Ball } from '../../UI/Ball';
import { useDispatch } from 'react-redux';
import { setUser } from "../../storage/user/user";
import { setCountries } from "../../storage/countries/countries";
import { useNavigate } from 'react-router-dom';

export const FormLogin = () => {
  const [message, setMessage] = React.useState<string>('')
  const { error, loading, request } = useFetchData();
  const userName = useInput();
  const apiKey = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userName.value && apiKey.value && !userName.error) {
      setMessage('')
      const result = await authUser(apiKey.value, request);
      if (result !== undefined) {
        const { response, json } = result;
        if (response.status === 200 && json?.errors?.token) {
          setMessage(json.errors.token)
        }

        if (response.status === 200 && json?.response && !json?.errors?.token) {
          const user = {
            name: userName.value,
            apiKey: apiKey.value,
          }
          dispatch(setUser(user))
          dispatch(setCountries(json.response))
          navigate('/dashboard')
        }

      }

      if (error) {
        setMessage(error)
      }
    }
  }


  return (
    <Styled.Container data-testid='form' onSubmit={handleAuth}>
      <Input type='text' name='Nome' {...userName}></Input>
      <Input type='password' name='ApiKey' {...apiKey} />
      <SubmitButton userName={userName.value} apiKey={apiKey.value} error={userName.error}>
        Enter
      </SubmitButton>
      {message && <ErrorMessage>{message}</ErrorMessage>}
      {loading && <Styled.Loading><Ball /></Styled.Loading>}
    </Styled.Container>
  )
}