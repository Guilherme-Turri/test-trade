import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IClub, ICountry, ILeague, IParameters} from '../../types/types'


export interface ParametersState {
  parameters: IParameters;
}

const initialState: ParametersState = {
  parameters:{
    country:{
      all: null,
      selected:null
    },
    league:{
      all:null, 
      selected:null
    },
    club:{
      all: null,
      selected:null
    },
    season:{
      all:null,
      selected:null,
   }
  }
};

export const parametersSlice = createSlice({
  name: 'parameters',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<ICountry[]>) => {
      state.parameters.country.all = action.payload;
    },
    setCountry: (state, action: PayloadAction<ICountry>) => {
    state.parameters.country.selected = action.payload;
    state.parameters.club.selected = null;
    state.parameters.club.all = null;
    state.parameters.league.selected = null;
    state.parameters.league.all = null;
    state.parameters.season.selected = null;
    state.parameters.season.all = null;
    },
    setLeagues: (state, action: PayloadAction<ILeague[]>) => {
      state.parameters.league.all = action.payload;
   },
    setLeague: (state, action: PayloadAction<ILeague>) => {
      state.parameters.league.selected = action.payload;
      state.parameters.club.selected = null;
      state.parameters.club.all = null;
   },
  setSeasons: (state, action: PayloadAction<string[]>) => {
    state.parameters.season.all = action.payload;
  },
   setSeason: (state, action: PayloadAction<string>) => {
    state.parameters.season.selected = action.payload;
    state.parameters.league.selected = null;
    state.parameters.league.all = null;
    state.parameters.club.selected = null;
    state.parameters.club.all = null;
  },
  setClubs: (state, action: PayloadAction<IClub[]>) => {
    state.parameters.club.all = action.payload;
  },
    setClub: (state, action: PayloadAction<IClub>) => {
      state.parameters.club.selected = action.payload;
    },
  },
}); 

export const {setCountries, setCountry,setLeagues, setLeague,  setSeason, setSeasons,setClubs, setClub } = parametersSlice.actions;

export default parametersSlice.reducer;