import { SEASON_API } from "./api";
import { IRequest } from "../types/types";

interface SeasonsProps{
  response?:string[],
  errors?:{
    token:string
  }
} 

export const getSeason = async (apiKey:string , request:IRequest<SeasonsProps>)=> {
  const { url, options } = SEASON_API(apiKey)
  const {response, json} = await request(url, options)
  if(response && json){
    return {response, json}
   }
    else return 
 }