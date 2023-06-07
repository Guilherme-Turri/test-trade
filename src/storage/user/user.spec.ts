import useReducer, { setUser, unsetUser } from './user';

describe('userStore', () =>{
  it('should store an user on context', () =>{
  const initialState={
      user :null
    }
    const payload = {
      name:'UserTest', 
      apiKey:'123'
   }
    const action = setUser(payload)
    const state = useReducer(initialState, action)
    expect(state.user).toEqual(payload)
  })
  
  it('should store  null on context', () =>{
    const initialState={
        user:{
          name:'UserTest', 
          apiKey:'123'
        }
      }
      const payload = null;
      const action = unsetUser()
      const state = useReducer(initialState, action)
      expect(state.user).toEqual(payload)
    })
})