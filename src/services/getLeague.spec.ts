import {getLeague} from './getLeague'
describe('Services - getLeague', ()=>{
  const apiKey ='123'
  const country='countryTest'
  const season ='seasonTest'

  it('should return undefined value from request Hook', async()=>{
    const mockedResult= {}
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await getLeague(apiKey,country, season, request);
    expect(result).toBe(undefined);
  })

  it('should return a promisse with an array of Leagues from request Hook', async()=>{
    const mockedResult={
    response:200,
    json:{
      response:[
        { 
          league:{
            id: 'l1',
            name: 'league1',
            logo: 'leagueLogo1',
          }
        }, 
        { 
          league:{
            id: 'l2',
            name: 'league2',
            logo: 'leagueLogo2',
          }
        }
      ]
    }
    }
  const request = jest.fn().mockResolvedValueOnce(mockedResult);
  const result = await getLeague(apiKey,country, season, request);
 expect(result).toEqual(mockedResult); 
  })
})