import {getClub} from './getClub'
describe('Services - getClub', ()=>{
  const apiKey ='123'
  const league='leagueTest'
  const season ='seasonTest'

  it('should return undefined value from request Hook', async()=>{
    const mockedResult= {}
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await getClub(apiKey,league, season, request);
    expect(result).toBe(undefined);
  })
    it('should return a promisse with an array of Clubs from request Hook', async()=>{
    const mockedResult={
    response:200,
    json:{
      response:[
        { 
          team:{
            id: 'c1',
            name: 'club1',
            logo: 'club1Logo1',
            code:'123'
         }
        }, 
        { 
          team:{
            id: 'c2',
            name: 'club2',
            logo: 'club1Logo2',
            code:'345'
         }
        }
      ]
    }
    }
    const request = jest.fn().mockResolvedValueOnce(mockedResult);
    const result = await getClub(apiKey,league, season, request);
 expect(result).toEqual(mockedResult); 
  })
})