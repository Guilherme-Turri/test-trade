import React from 'react'
import * as Styled from './styles'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../../storage/store';
import { setCountry } from '../../../storage/parameters/parameters';
import { setSeasons } from '../../../storage/parameters/parameters';
import { closeModal } from "../../../storage/modal/modal";
import { getSeason } from '../../../services/getSeason'
import { useFetchData } from '../../../hooks/useFetch'
import { Ball } from '../../../UI/Ball'
import { TextComponent } from '../../TextComponent';
import { ErrorMessage } from '../../ErrorMessage';

import { ICountry } from '../../../types/types';

export const ModalCountries = () => {
  const [message, setMessage] = React.useState<string>('')
  const { error, loading, request } = useFetchData();
  const { parameters } = useSelector((state: RootState) => state.parameters);

  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch()

  const chosenCountry = (country: ICountry) => {
    dispatch(setCountry(country));
    handleSeason();
  };

  const handleSeason = async () => {
    const result = await getSeason(user!.apiKey, request)
    if (result !== undefined) {
      const { response, json } = result;
      if (response.status === 200 && json?.errors?.token) {
        setMessage(json.errors.token)
      }
      if (response.status === 200 && json?.response && !json?.errors?.token && Array.isArray(json?.response)) {
        dispatch(setSeasons(json.response.map(String)));
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
    <Styled.Container data-testid='countriesContainer'>
      {parameters?.country?.all ?
        parameters.country.all.map((element) => (
          <Styled.Item data-testid='container' key={element.code} onClick={() => chosenCountry(element)}>
            <TextComponent>{element.code}</TextComponent>
            <Styled.Img src={element.flag} alt={element.code} />
          </Styled.Item>
        )) : <ErrorMessage>Refaça a busca e/ou verifique as requisições diárias</ErrorMessage>}
    </Styled.Container >
  )
}