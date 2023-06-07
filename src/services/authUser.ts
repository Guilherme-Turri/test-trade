import { AUTH_USER_API } from "./api";
import { IRequest, ICountry } from "../types/types";

interface AuthCountries{
  response?:ICountry[]
  errors?:{
    token:string
  }
}

export const authUser = async (apiKey:string , request:IRequest<AuthCountries>)=> {
  const { url, options } = AUTH_USER_API(apiKey)
  const {response, json} = await request(url, options)
  if(response && json){
    return {response, json}
   }
    else return 
 }
 