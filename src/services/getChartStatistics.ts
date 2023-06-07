import { CHART_STATISTICS_API } from "./api";
import { IRequest, IPlayer } from "../types/types";

interface PlayerProps{
  response?:IPlayer[],
  errors?:{
    token:string
  }
} 

export const getChartStatistics = async (apiKey:string, league:string, season:string, club:string, request:IRequest<PlayerProps>)=> {
    const { url, options } = CHART_STATISTICS_API(apiKey, league, season, club)
  const {response, json} = await request(url, options)
    if(response && json){
    return {response, json}
   }
    else return 
 }