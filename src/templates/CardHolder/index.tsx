import * as Styled from './styles'
import { Card } from '../../components/Card'
import { Earth } from '../../UI/Earth'
import { Club } from '../../UI/Club'
import { League } from '../../UI/League'
import { ModalHolder } from '../ModalHolder'
import { useSelector } from 'react-redux';
import { RootState } from '../../storage/store';
import { useDispatch } from 'react-redux';
import { openModal } from "../../storage/modal/modal";



export const CardHolder = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.modal);
  return (
    <Styled.Container>
      {modal.showModal && <ModalHolder type={modal.type}></ModalHolder>}
      <Card
        handleOpen={() => dispatch(openModal({
          showModal: true,
          type: 'country'
        }))}
        title='Selecione o pais'
        img={<Earth />}></Card>
    </Styled.Container >
  )
}