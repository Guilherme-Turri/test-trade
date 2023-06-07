import useReducer, { setCountries, setCountry,setLeagues, setLeague,  setSeason, setSeasons,setClubs, setClub } from './parameters';
import {initialState, mockClubs, mockCountries, mockLeagues} from './mock'

describe('parameters', () =>{
  it('should store allCountries on context', () =>{
    const payload = mockCountries
    const action = setCountries(payload)
    const state = useReducer(initialState, action)
    expect(state.parameters.country.all).toEqual(payload)
  })
  it('should store selected Country on context', () =>{
    const payload = mockCountries[0]
    const action = setCountry(payload)
    const state = useReducer(initialState, action);
    expect(state.parameters.country.selected).toEqual(payload);
    expect(state.parameters.club.selected).toEqual(null);
    expect(state.parameters.club.all).toEqual(null);
    expect(state.parameters.league.selected).toEqual(null);
    expect(state.parameters.league.all).toEqual(null);
    expect(state.parameters.season.selected).toEqual(null);
    expect(state.parameters.season.all).toEqual(null);
  })
  it('should store allLeagues on context', () =>{
    const payload = mockLeagues
    const action = setLeagues(payload)
    const state = useReducer(initialState, action)
    expect(state.parameters.league.all).toEqual(payload)
  })
  it('should store selected league on context', () =>{
    const payload = mockLeagues[0]
    const action = setLeague(payload)
    const state = useReducer(initialState, action)
    expect(state.parameters.league.selected).toEqual(payload)
    expect(state.parameters.club.selected).toEqual(null);
    expect(state.parameters.club.all).toEqual(null);
  })
  it('should store allSeasons on context', () =>{
    const payload = ['2020', '2021', '2022']
    const action = setSeasons(payload)
    const state = useReducer(initialState, action)
    expect(state.parameters.season.all).toEqual(payload)
  })
  it('should store selected season on context', () =>{
    const payload = '2020'
    const action = setSeason(payload)
    const state = useReducer(initialState, action)
    expect(state.parameters.season.selected).toEqual(payload)
    expect(state.parameters.club.selected).toEqual(null);
    expect(state.parameters.club.all).toEqual(null);
    expect(state.parameters.league.selected).toEqual(null);
    expect(state.parameters.league.all).toEqual(null);
  })
  it('should store allClubs on context', () =>{
    const payload = mockClubs
    const action = setClubs(payload)
    const state = useReducer(initialState, action)
    expect(state.parameters.club.all).toEqual(payload)
  })
  it('should store selected Club on context', () =>{
    const payload = mockClubs[0]
    const action = setClub(payload)
    const state = useReducer(initialState, action)
    expect(state.parameters.club.selected).toEqual(payload)
  })
  })