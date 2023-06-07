import React from 'react'
import * as Styled from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../storage/store';
import { Ball } from '../../../UI/Ball';
import { closeModal } from '../../../storage/modal/modal'
import { setLeague } from '../../../storage/parameters/parameters'
import { setClubs } from '../../../storage/parameters/parameters'
import { getClub } from '../../../services/getClub'
import { useFetchData } from '../../../hooks/useFetch'
import { ErrorMessage } from '../../ErrorMessage';
import { TextComponent } from '../../TextComponent';
import { ILeague } from '../../../types/types'


export const ModalLeague = () => {
  const [message, setMessage] = React.useState<string>('')
  const dispatch = useDispatch();
  const { parameters } = useSelector((state: RootState) => state.parameters);
  const { error, loading, request } = useFetchData();
  const { user } = useSelector((state: RootState) => state.user);


  const chosenLeague = (item: ILeague) => {
    dispatch(setLeague(item))
    handleClub(item.league.id);
  };


  const handleClub = async (leagueId: string) => {
    const selectedSeason = parameters?.season?.selected || ''
    const result = await getClub(user!.apiKey, leagueId, selectedSeason, request)
    if (result !== undefined) {
      const { response, json } = result;

      if (response.status === 200 && json?.errors?.token) {
        setMessage(json.errors.token)
      }
      if (response.status === 200 && json?.response && !json?.errors?.token) {

        dispatch(setClubs(json.response));
        dispatch(closeModal());
      }
    }
    if (error) {
      setMessage(error)
    }
  }
  if (loading) return <Styled.Load> <Ball /></Styled.Load>
  if (message) return <TextComponent>{message}</TextComponent>

  return (
    <Styled.Container data-testid='modalLeagueId'>
      {parameters?.league?.all ?
        parameters?.league?.all.map((item: any) => (
          <Styled.Item onClick={() => chosenLeague(item)} key={item.league.id}>
            {item.league.name}
          </Styled.Item>
        )) : <ErrorMessage>Refaça a busca e/ou verifique as requisições diárias</ErrorMessage>
      }
    </Styled.Container>
  );
};
