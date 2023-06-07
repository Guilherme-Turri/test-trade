import { CLUB_API } from "./api";
import { IRequest, IClub } from "../types/types";

interface ClubPros{
  response?:IClub[],
  errors?:{
    token:string
  }
} 

export const getClub = async (apiKey:string, league:string, season:string, request:IRequest<ClubPros>)=> {
  const { url, options } = CLUB_API(apiKey, league, season)
  const {response, json} = await request(url, options)
  if(response && json){
    return {response, json}
   }
    else return 
 }