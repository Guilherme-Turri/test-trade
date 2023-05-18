import * as Styled from './styles'
import { Footer } from '../../components/Footer';

import { FormLogin } from '../../templates/FormLogin';
import { Heading } from '../../components/Heading';
import { LinkTo } from '../../components/LinkTo';

export const Login = () => {

  return (
    <Styled.Container>
      <Styled.Info>
        <LinkTo href='https://www.api-football.com/documentation-v3' >Não tem uma ApiKey? Crie aqui!</LinkTo>
        <Heading as='h1' uppercase={true} big={true}>Meu Time</Heading>
      </Styled.Info>
      <FormLogin></FormLogin>
      <Footer />
    </Styled.Container>
  )
}