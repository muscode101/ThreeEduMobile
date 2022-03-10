import {loadUser} from "./userActions";
import {LOGIN_FAIL, LOGIN_SUCCESS} from "./types";
import studentResponse from "../../data"

export const login = (user_id, password) => async dispatch => {
    console.log('Action::login')
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({user_id, password})
    console.log('Action::login',body)
    try {
          const res = {data:null};
          res.data = studentResponse
          console.log("response::",res.data)
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser(res))
    } catch (err) {
        if (err.response) {
            const errors = err.response.data.errors
            errors.forEach(
                error => console.log('error::msg',error.msg))
        } else if (err.request) {
            const errors = err.response.data.errors
            console.log('error::request',errors)
        } else if (err.message) {
            console.log('error::message',err.message)
        }
        dispatch({type: LOGIN_FAIL})
    }
}