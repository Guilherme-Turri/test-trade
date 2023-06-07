import useReducer, { openModal, closeModal, modalSlice } from './modal';
describe('modalStore', () => {
  it('should store props of modal in a context', () => {
    const initialState = {
      modal: {
        showModal: false,
        type:'',
       }
    }
    const payload =  {
        showModal: true,
        type:'country',
    }
    const action = openModal(payload)
    const state = useReducer(initialState, action)
    expect(state.modal).toEqual(payload)
  })

  it('should store modal without params', () => {
    const initialState = {
      modal: {
        showModal: false,
        type: '',
      }
    };
    const action = closeModal();
    const state = modalSlice.reducer(initialState, action); 
    expect(state).toEqual(initialState); //compare states
  });
});