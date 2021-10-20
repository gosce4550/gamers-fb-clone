/*import {
  SET_SCREAMS,
  LOADING_DATA,
  LIKE_SCREAMS,
  UNLIKE_SCREAMS,
} from "../types";

import axios from "axios"; 14.4k (gzipped: 5.1k)


export const getScreams = () => dispatch => {
    dispatchEvent({type: LOADING_DATA})
    axios.get("./screans")
        .then(res =>{
            dispatch({
                type:SET_SCREAMS,
                payload: res.data
            })
            
        })
        .catch(err =>
            dispatch({
                type:SET_SCREAMS,
                payload:[]
            }))
}


//Like scream

//unlike scream