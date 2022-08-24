import React, {createContext, useReducer} from 'react'
import axios from "axios";

// create user state Context
export const userStateContext = createContext()

const getToken = () => localStorage.getItem('token')

const initialUserState = {
    isLogin: true,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return {...state, isLogin: true}
        case 'logout':
            return {...state, isLogin: false}
        default:
            throw new Error('something went wrong in the user state reducer')
    }
}

axios.interceptors.request.use(
    (config) => {
        const token = getToken()
        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }
        return config
    },
    (error) => Promise.reject(error)
)

axios.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;
        if (error.response.status === 401 ) {

            originalRequest._retry = true;
            return axios.post('/auth/token',
                {
                    "refresh_token": getToken()
                })
                .then(res => {
                    if (res.status === 201) {
                        // 1) put token to LocalStorage
                        localStorage.setItem('token',res.data);

                        // 2) Change Authorization header
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + getToken();

                        // 3) return originalRequest object with Axios.
                        return axios(originalRequest);
                    }
                })
        }

    }
)


function UserStateProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialUserState)

    return (
        <userStateContext.Provider value={{state, dispatch}}>
            {children}
        </userStateContext.Provider>

    )
}

export default UserStateProvider
