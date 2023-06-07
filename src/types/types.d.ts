
export interface IUser {
name:string;
apiKey:string;
}
export interface ICountry {
  name: string;
  code: string;
  flag: string;
}

export interface ILeague{
  league:{
    id:string,
    name:string,
    logo:string
  }
}

export interface IFixture {
  wins: {
    total: string
  },
  draws: {
    total: string
  },
  loses: {
    total: string
  },
  played: {
    total: string
  },
}

export interface IFormation {
  formation: string,
  played: number
}

export interface IClub{
  team:{
    id:string,
    name:string,
    logo:string,
    code:string
  }
}

export interface IPlayer {
 player:{
  name: string;
  age: number;
  nationality: string;
 }
}

export interface IParameters {
  country: {
    all: ICountry[]| null;
    selected: ICountry| null;
  };
  league: {
    all: ILeague[] | null;
    selected:ILeague | null;
  };
  club: {
    all:IClub[] | null,
    selected: IClub | null
  };
  season:{
    all: string[] | null,
    selected:string |null
  }
}
export type minutesT ={
  '0-15':{
    total:number
  },
  '16-30':{
    total:number
  },
  '31-45':{
    total:number
  },
  '46-60':{
    total:number
  },
  '61-75':{
    total:number
  },
  '76-90':{
    total:number
  },
  '91-105':{
    total:number
  },
  '106-120':{
    total:number
  },
}

export interface IGraph{
  minute: minutesT;
}

export interface IModal {
  showModal: boolean;
  type: string;
}
export type IRequest<T> = (url: string, options: RequestInit) => Promise<{
  response:any,
  json: T | null;
}>