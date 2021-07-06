import { useSelector } from "react-redux";



export function UseShowDAta(){
    const storeData = useSelector(store => store.Reducer.newState)
    console.log('Data comming from Store in UseShowDAta', storeData);

    return [storeData];

}