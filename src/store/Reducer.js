

import {ADD_DATA} from "../constants/Constants"

let initialState = {
    stName: "Default Name",
    stRoll: "Default Roll",
    newState: [],
};

function Reducer(state = initialState, action){

    switch (action.type) {
      case ADD_DATA: {
        console.log("Data in Reducer is ", action.payload);
        return {
          state:action.payload,
        };
      }

      default:
        return state;
    }
}
export default Reducer;