import * as Styled from './styles'
import { Card } from '../../components/Card'
import { Earth } from '../../UI/Earth'
import { Club } from '../../UI/Club'
import { League } from '../../UI/League'
import { Calendar } from '../../UI/Calendar'
import { ModalHolder } from '../ModalHolder'
import { useSelector } from 'react-redux';
import { RootState } from '../../storage/store';
import { useDispatch } from 'react-redux';
import { openModal } from "../../storage/modal/modal";

export const CardHolder = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.modal);
  const { parameters } = useSelector((state: RootState) => state.parameters);

  const countryName = parameters.country?.selected?.name;
  const countryFlag = parameters.country?.selected?.flag;

  const seasonName = parameters.season?.selected;

  const leagueName = parameters.league?.selected?.league?.name;
  const leagueFlag = parameters.league?.selected?.league?.logo;

  const clubName = parameters.club?.selected?.team?.name;
  const clubFlag = parameters.club?.selected?.team?.logo

  return (
    <Styled.Container data-testid='CardHolderContainer'>
      {modal.showModal && <ModalHolder type={modal.type}></ModalHolder>}

      <Card available={true}
        handleOpen={() => dispatch(openModal({
          showModal: true,
          type: 'country'
        }))}
        title={countryName ? countryName : 'Selecione o país'}
        img={countryFlag ? <Styled.Img src={countryFlag} /> : <Earth />}></Card>

      {/* ------------------------------------------- */}

      <Card available={Boolean(countryName)}
        handleOpen={() => dispatch(openModal({
          showModal: true,
          type: 'season'
        }))}
        title={seasonName ? seasonName : 'Selecione a temporada'}
        img={<Calendar readyToChose={Boolean(countryName)} />}></Card>

      {/* ------------------------------------------- */}

      <Card available={Boolean(seasonName)}
        handleOpen={() => dispatch(openModal({
          showModal: true,
          type: 'league'
        }))}
        title={leagueName ? leagueName : 'Selecione a liga'}
        img={leagueFlag ? <Styled.Img src={leagueFlag} /> : <League readyToChose={Boolean(seasonName)} />}></Card>

      {/* ------------------------------------------- */}

      <Card available={Boolean(leagueName)}
        handleOpen={() => dispatch(openModal({
          showModal: true,
          type: 'club'
        }))}
        title={clubName ? clubName : 'Selecione o clube'}
        img={clubFlag ? <Styled.Img src={clubFlag} /> : <Club readyToChose={Boolean(leagueName)} />}></Card>
    </Styled.Container >
  )
}