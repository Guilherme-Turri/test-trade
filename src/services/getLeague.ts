import { LEAGUES_API } from "./api";
import { IRequest, ILeague } from "../types/types";

interface LeagueProps{
  response?:ILeague[],
  errors?:{
    token:string
  }
} 

export const getLeague = async (apiKey:string, country:string, season:string, request:IRequest<LeagueProps>)=> {
  const { url, options } = LEAGUES_API(apiKey, country, season)
  const {response, json} = await request(url, options)
  if(response && json){
    return {response, json}
   }
    else return 
 }