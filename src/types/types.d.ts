export interface IUser {
name:string;
apiKey:string;
}
export type IRequest<T> = (url: string, options: RequestInit) => Promise<{
  response:any,
  json: T | null;
}>