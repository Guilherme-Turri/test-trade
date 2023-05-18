import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ICountry} from '../../types/types'

export interface CountryState {
  countries: ICountry[] | null;
  }

const initialState:CountryState = {
  countries: [],
};
 
export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<ICountry[]>) => {
      state.countries = action.payload;
      },
    unsetCountries: (state) => {
      state.countries = [];
    },
  },
});

export const { setCountries, unsetCountries} = countriesSlice.actions;
export default countriesSlice.reducer;
