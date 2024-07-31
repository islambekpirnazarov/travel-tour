import axios from "axios";
import { actions } from "../context/action";

export async function getDestinationData(url, dispatch) {
    try{
        dispatch({type : actions.FETCHING_DEST_DATA})
        const res = await axios.get(url)
        dispatch({type : actions.FETCHED_DEST_DATA, payload : res.data})
    }catch(err) {
        dispatch({type : actions.FETCHING_DEST_DATA_ERROR})
    }
}
export async function getTourData(url, dispatch) {
    try{
        dispatch({type : actions.FETCHING_TOUR_DATA})
        const res = await axios.get(url)
        dispatch({type : actions.FETCHED_TOUR_DATA, payload : res.data})
    }catch(err) {
        dispatch({type : actions.FETCHING_TOUR_DATA_ERROR})
    }
}