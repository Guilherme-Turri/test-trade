import React from 'react'
import * as Styled from './styles'
import { Close } from '../../UI/Close'
import { useDispatch } from 'react-redux';
import { closeModal } from "../../storage/modal/modal";
import { ModalCountries } from '../../components/Modal/ModalCountries'
import { ModalSeason } from '../../components/Modal/ModalSeason';
import { ModalLeague } from '../../components/Modal/ModalLeague'
import { ModalClub } from '../../components/Modal/ModalClub';

interface ModalProps {
  type: string
}

export const ModalHolder = ({ type }: ModalProps) => {

  const dispatch = useDispatch();

  return (
    <Styled.Container data-testid='modalHolderId'>
      <Styled.Close onClick={() => dispatch(closeModal())}>
        <Close />
      </Styled.Close>
      {type === 'country' && <ModalCountries ></ModalCountries>}
      {type === 'season' && <ModalSeason ></ModalSeason>}
      {type === 'league' && <ModalLeague ></ModalLeague>}
      {type === 'club' && <ModalClub></ModalClub>}
    </Styled.Container>
  )
}