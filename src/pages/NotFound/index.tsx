import { NotFoundLocation } from '../../UI/NotFoundLocation'
import * as Styled from './styles'
import { Footer } from '../../components/Footer';
import { Heading } from '../../components/Heading';

import { Link } from 'react-router-dom'
export const NotFound = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Img><NotFoundLocation /></Styled.Img>
        <Heading as='h1' uppercase={true} big={true}>404</Heading>
        <Link to='/'>Pagina nao encontrada! Voltar</Link>
      </Styled.Content>
      <Footer></Footer>
    </Styled.Container>
  )
}
