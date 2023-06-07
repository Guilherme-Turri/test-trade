import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../storage/store';
import { Ball } from '../../../UI/Ball'
import * as  Styled from './styles'
import { setSeason } from '../../../storage/parameters/parameters';
import { closeModal } from '../../../storage/modal/modal';
import { getLeague } from '../../../services/getLeague'
import { useFetchData } from '../../../hooks/useFetch'
import { setLeagues } from '../../../storage/parameters/parameters';
import { ErrorMessage } from '../../ErrorMessage';
import { TextComponent } from '../../TextComponent';

export const ModalSeason = () => {
  const [message, setMessage] = React.useState<string>('')
  const { error, loading, request } = useFetchData();
  const dispatch = useDispatch()
  const { parameters } = useSelector((state: RootState) => state.parameters);
  const { user } = useSelector((state: RootState) => state.user);

  const chosenSeason = (item: string) => {
    dispatch(setSeason(item))
    handleLeague(item);
  }

  const handleLeague = async (selectedSeason: string) => {
    const selectedCountry = parameters?.country?.selected?.name || '';

    const result = await getLeague(user!.apiKey, selectedCountry, selectedSeason, request)
    if (result !== undefined) {
      const { response, json } = result;

      if (response.status === 200 && json?.errors?.token) {
        setMessage(json.errors.token)
      }
      if (response.status === 200 && json?.response && json?.response?.length > 0 && !json?.errors?.token) {
        dispatch(setLeagues(json?.response));
        dispatch(closeModal())
      }
    }
    if (error) {
      setMessage(error)
    }
  }

  if (loading) return <Styled.Load> <Ball /></Styled.Load>
  if (message) return <TextComponent>{message}</TextComponent>

  return (
    <Styled.Container data-testid='modalSeasonId'>
      {parameters?.season?.all && parameters.season.all.length > 0 ?
        parameters?.season?.all?.map((item: any) => (
          <Styled.Item onClick={() => chosenSeason(item)} key={item}>{item}</Styled.Item>
        )) : <ErrorMessage>Refaça a busca e/ou verifique as requisições diárias</ErrorMessage>
      }
    </Styled.Container>
  )
}