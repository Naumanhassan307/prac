import { useState } from "react";

import { useDispatch } from "react-redux";

import {AddData} from "../../store/Action"



export function UseAddData(){
    const [stName, setStName] = useState("")
    const [stRoll, setStRoll] = useState("")
    
    const dispatch = useDispatch();
  
    
    
    
 
    const ctaHandler= ()=>{
       
       let newSt = {
           newStName: stName,
           newStRoll: stRoll,
       }
       
      
       dispatch(AddData(newSt));
       
      
    }


    return [setStName, setStRoll, ctaHandler];
}