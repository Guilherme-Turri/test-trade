import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/SubmitButton";
import { useInput } from "../../hooks/useInput";
import * as Styled from './styles'
export const FormLogin = () => {
  const userName = useInput();
  const apiKey = useInput();

  return (
    <Styled.Container data-testid='form'>
      <Input type='text' name='Nome' {...userName}></Input>
      <Input type='password' name='ApiKey' {...apiKey} />
      <SubmitButton userName={userName.value} apiKey={apiKey.value} error={userName.error}>
        Enter
      </SubmitButton>
    </Styled.Container>
  )
}