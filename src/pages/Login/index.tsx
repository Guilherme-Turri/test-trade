import * as Styled from './styles'
import { Footer } from '../../components/Footer';

import { FormLogin } from '../../templates/FormLogin';
import { Heading } from '../../components/Heading';

export const Login = () => {

  return (
    <Styled.Container>
      <Heading as='h1' uppercase={true} big={true}>Meu Time</Heading>
      <FormLogin></FormLogin>
      <Footer />
    </Styled.Container>
  )
}