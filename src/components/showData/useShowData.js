import { useSelector } from "react-redux";



export function UseShowDAta(){
    const store = useSelector(store => store.state)

    console.log("Data comming from Store in UseShowDAta", store)

    return[store];

}