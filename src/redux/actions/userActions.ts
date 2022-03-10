import {AUTH_FAIL, USER_LOADED} from "./types";

export const loadUser = (res) => async dispatch => {
    console.log("loadUser")
    try {
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
        console.log("user loaded")
    } catch (err) {
        console.log("loadUser error::",err)
        dispatch({
            type: AUTH_FAIL
        })
    }
}




