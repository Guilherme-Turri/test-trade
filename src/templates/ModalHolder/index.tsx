import * as Styled from './styles'
import { Close } from '../../UI/Close'
import { useDispatch } from 'react-redux';
import { closeModal } from "../../storage/modal/modal";
import { ModalCountries } from '../../components/Modal/ModalCountries'

interface ModalProps {
  type: string
}
export const ModalHolder = ({ type }: ModalProps) => {
  const dispatch = useDispatch();

  return (
    <Styled.Container>
      <Styled.Close onClick={() => dispatch(closeModal())}>
        <Close />
      </Styled.Close>
      {type === 'country' && <ModalCountries></ModalCountries>}
    </Styled.Container>
  )
}