import { STATISTICS_API } from "./api";
import { IRequest, IFixture, minutesT } from "../types/types";

type lineupT = {
  formation:string,
  played:number
}

interface getStatisticsProps{
  response?:{
    fixtures:IFixture,
    goals:{
      for:{
        minute:minutesT
      }
    },
    lineups:lineupT[],
  }
  errors?:{
    token:string
  }
} 


export const getStatistics = async (apiKey:string, league:string, season:string, club:string, request:IRequest<getStatisticsProps>)=> {
  
  const { url, options } = STATISTICS_API(apiKey, league, season, club)
  const {response, json} = await request(url, options)
  if(response && json){
    return {response, json}
   }
    else return 
 } 