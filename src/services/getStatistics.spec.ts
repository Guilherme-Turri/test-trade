import {getStatistics} from './getStatistics'
describe('Services - getStatistics', ()=>{
  const apiKey ='123'
  const league='leagueTest'
  const season ='seasonTest'
  const club='clubTest'
  it('should return undefined value from request Hook', async()=>{
    const mockedResult= {}
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await getStatistics(apiKey,league, season, club,request);
    expect(result).toBe(undefined);
  })
    it('should return a promisse with jsonError from request Hook', async()=>{
    const mockedResult={
    response:200,
    json:{
      errors:
      {token:'tokenErrorString'}
    }
    }
     const request = jest.fn().mockResolvedValueOnce(mockedResult);
    const result = await getStatistics(apiKey,league, season, club,request);
 expect(result).toEqual(mockedResult); 
  })
})