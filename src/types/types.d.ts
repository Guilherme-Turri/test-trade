export interface IUser {
name:string;
apiKey:string;
}
export interface ICountry {
  namge: string;
  code: string;
  flag: string;
}
export type IRequest<T> = (url: string, options: RequestInit) => Promise<{
  response:any,
  json: T | null;
}>