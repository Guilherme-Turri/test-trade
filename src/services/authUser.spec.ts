import {authUser} from './authUser'
describe('Services - authUser', ()=>{
  it('should return undefined value from request Hook', async()=>{
    const apiKey ='123'
    const mockedResult= {};
    const request = jest.fn().mockResolvedValue(mockedResult);
    const result = await authUser(apiKey, request);
    expect(result).toBe(undefined);
  })
    it('should return a promisse with an array of Countries from request Hook', async()=>{
    const apiKey ='123'
    const mockedResult={
    response:200,
    json:{
      response:[
        {
          name: 'C2',
          code: "C2",
          flag: "C2Flag"
          }
      ]
    }
    }
     const request = jest.fn().mockResolvedValueOnce(mockedResult);
    const result = await authUser(apiKey, request);
    expect(result).toEqual(mockedResult); 
  })
})