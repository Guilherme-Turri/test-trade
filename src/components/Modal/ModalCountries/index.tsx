import * as Styled from './styles'
import { useSelector } from 'react-redux';
import { RootState } from '../../../storage/store';
import { TextComponent } from '../../TextComponent';

export const ModalCountries = () => {
  const { countries } = useSelector((state: RootState) => state.countries);

  return (
    <Styled.Container>
      {countries?.map((element) => (
        <Styled.Item onClick={() => console.log(element.code)}>
          <TextComponent>{element.code}</TextComponent>
          <Styled.Img src={element.flag} alt={element.code} />
        </Styled.Item>))
      }
    </Styled.Container >
  )
}