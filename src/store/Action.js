
import {ADD_DATA} from "../constants/Constants"



export const AddData=(data) =>{
  console.log("Data in action ", data);
    return {
      type: ADD_DATA,
      payload: data,
    };
}
