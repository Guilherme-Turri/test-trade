import React from 'react';
import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/SubmitButton";
import { useFetchData } from "../../hooks/useFetch";
import { useInput } from "../../hooks/useInput";
import { authUser } from "../../services/authUser";
import * as Styled from './styles'
import { ErrorMessage } from '../../components/ErrorMessage';
import { Ball } from '../../UI/Ball';

export const FormLogin = () => {
  const [message, setMessage] = React.useState<string>('')
  const { error, loading, request } = useFetchData();
  const userName = useInput();
  const apiKey = useInput();

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userName.value && apiKey.value && !userName.error) {
      setMessage('')
      const { response, json } = await authUser(apiKey.value, request);

      if (response.status === 200 && json?.errors?.token) {
        setMessage(json.errors.token)
      }
      if (response.status === 200 && json?.response) {
        console.log('logou')
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