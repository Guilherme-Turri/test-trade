import React from 'react'
import * as Styled from './styles'
import { useSelector } from 'react-redux'
import { Heading } from '../../components/Heading'
import { TextComponent } from '../../components/TextComponent'
import { ResultsTable } from '../../components/ResultsTable'
import { PlayersTable } from '../../components/PlayersTable'
import { Graph } from '../../components/Graph'
import { Ball } from '../../UI/Ball'
import { RootState } from '../../storage/store'
import { useFetchData } from '../../hooks/useFetch'
import { getStatistics } from '../../services/getStatistics'
import { getChartStatistics } from '../../services/getChartStatistics'
import { IPlayer, IFixture, IFormation, IGraph } from '../../types/types'

export const Statistics = () => {
  const { parameters } = useSelector((state: RootState) => state.parameters);
  const [message, setMessage] = React.useState<string>('')
  const [mostFormation, setMostFormation] = React.useState<IFormation | null>();
  const [fixtures, setFixtures] = React.useState<IFixture>();
  const [graphParameters, setGraphParameters] = React.useState<IGraph>()
  const [players, setPlayers] = React.useState<IPlayer[]>([])
  const { user } = useSelector((state: RootState) => state.user);
  const { error, loading, request } = useFetchData();


  const club = parameters?.club?.selected?.team?.name;
  const clubId = parameters?.club?.selected?.team?.id || '';
  const logo = parameters?.club?.selected?.team?.logo;
  const leagueId = parameters?.league?.selected?.league?.id || '';
  const season = parameters?.season?.selected || ''
  const apiKey = user!.apiKey;


  React.useEffect(() => {
    const setStatistics = async () => {
      const result = await getStatistics(apiKey, leagueId, season, clubId, request)
      if (result !== undefined) {
        const { response, json } = result;
        if (response.status === 200 && json?.errors?.token) {
          setMessage(json.errors.token)
        }
        if (response.status === 200 && json?.response && !json?.errors?.token) {
          setGraphParameters(json.response.goals.for)
          setFixtures(json.response.fixtures)
          const mostFormationPlayed = json?.response?.lineups?.length > 0
            ? json?.response?.lineups?.reduce((accumulator: any, currentValue: any) => {
              if (currentValue.played > accumulator.played) {
                return currentValue;
              } else {
                return accumulator;
              }
            })
            : null;
          setMostFormation(mostFormationPlayed)
        }
        if (error) {
          setMessage(error)
        }
      }
    }
    setStatistics();
  }, [clubId, error, season, leagueId, request, apiKey])

  React.useEffect(() => {
    const setChartStatistics = async () => {
      const result = await getChartStatistics(apiKey, leagueId, season, clubId, request)
      if (result !== undefined) {
        const { response, json } = result;
        if (response.status === 200 && json?.errors?.token) {
          setMessage(json.errors.token)
        }
        if (response.status === 200 && json?.response && !json?.errors?.token)
          setPlayers(json.response)
      }
      if (error) {
        setMessage(error)
      }
    }
    setChartStatistics();
  }, [clubId, error, season, leagueId, request, apiKey])

  if (loading) return <Styled.Load data-testid='loadingStatistics'> <Ball /></Styled.Load>
  if (message) return <TextComponent>{message}</TextComponent>

  return (
    <Styled.Container data-testid="StatisticsContainer">
      <Styled.Heading>
        <Heading uppercase={true} big={true} as='h2'>{club}</Heading>
        <Styled.Logo src={logo} />
      </Styled.Heading>
      <Styled.Statistics>
        {mostFormation && <TextComponent>Esquema tático mais utilizado: {mostFormation.formation}, total:  {mostFormation.played}  vezes. </TextComponent>}
        {fixtures && <ResultsTable wins={fixtures.wins.total} draws={fixtures.draws.total} loses={fixtures.loses.total} total={fixtures.played.total}></ResultsTable>}
      </Styled.Statistics>
      {graphParameters?.minute['0-15'].total && <Graph data={graphParameters}></Graph>}
      {players.length > 0 && <PlayersTable players={players}></PlayersTable>}
    </Styled.Container>
  )
}