import {getSeason} from './getSeason'
describe('Services - getSeason', ()=>{
  const apiKey ='123'
  it('should return undefined value from request Hook', async()=>{
    const mockedResult= {}
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await getSeason(apiKey, request);
    expect(result).toBe(undefined);
  })
    it('should return a promisse with an array of Season from request Hook', async()=>{
    const mockedResult={
    response:200,
    json:{
      response:['2020', '2021', '2022' ]
    }
    }
    const request = jest.fn().mockResolvedValueOnce(mockedResult);
    const result = await getSeason(apiKey, request);
 expect(result).toEqual(mockedResult); 
  })
})