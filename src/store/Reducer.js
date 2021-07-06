import {ADD_DATA} from '../constants/Constants';

let initialState = {
  newState: [],
};

const Reducer =(state = initialState, action)=> {
  switch (action.type) {
    case ADD_DATA: {
      console.log('Data in Reducer is ', action.payload);
      return {
        ...state,
        newState: [...state.newState, action.payload],
      };
    }

    default:
      return state;
  }
}
export default Reducer;
