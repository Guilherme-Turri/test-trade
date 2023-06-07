import {getChartStatistics} from './getChartStatistics'
describe('Services - getChartStatistics', ()=>{
  const apiKey ='123'
  const league='leagueTest'
  const season ='seasonTest'
  const club='clubTest'
  it('should return undefined value from request Hook', async()=>{
    const mockedResult= {}
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await getChartStatistics(apiKey,league, season, club,request);
    expect(result).toBe(undefined);
  })
    it('should return a promisse with an array of Players from request Hook', async()=>{
    const mockedResult={
    response:200,
    json:{
      response:[
        { 
          player:{
          name: 'p1',
          age: 20,
          nationality: 'br'
         }
        }, 
        { 
          player:{
          name: 'p2',
          age: 30,
          nationality: 'es'
         }
        }
      ]
    }
    }
     const request = jest.fn().mockResolvedValueOnce(mockedResult);
    const result = await getChartStatistics(apiKey,league, season, club,request);
 expect(result).toEqual(mockedResult); 
  })
})