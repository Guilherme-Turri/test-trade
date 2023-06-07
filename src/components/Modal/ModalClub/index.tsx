import * as Styled from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../storage/store';
import { TextComponent } from '../../TextComponent';
import { setClub } from '../../../storage/parameters/parameters';
import { closeModal } from '../../../storage/modal/modal';
import { ErrorMessage } from '../../ErrorMessage';
import { IClub } from '../../../types/types'

export const ModalClub = () => {
  const { parameters } = useSelector((state: RootState) => state.parameters);

  const dispatch = useDispatch()
  const chosenClub = (item: IClub) => {
    dispatch(setClub(item))
    dispatch(closeModal())
  }
  return (
    <Styled.Container data-testid='modalClubId'>
      {parameters?.club?.all ?
        parameters?.club?.all.map((item: any) => (
          <Styled.Item key={item.team.name} onClick={() => chosenClub(item)}>
            <Styled.Img src={item.team.logo} />
            <TextComponent>{item.team.name}</TextComponent>
          </Styled.Item>
        )) : <ErrorMessage>Refaça a busca e/ou verifique as requisições diárias</ErrorMessage>
      }
    </Styled.Container>
  )
}