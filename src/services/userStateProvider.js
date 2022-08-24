import React, { createContext, useReducer } from 'react'

// create user state Context
export const userStateContext = createContext()

const initialUserState = {
    isLogin: true,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'login': return { ...state, isLogin: true }
        case 'logout': return { ...state, isLogin: false }
        default: throw new Error('something went wrong in the user state reducer')
    }
}


function UserStateProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialUserState)

    return (
        <userStateContext.Provider value={{ state, dispatch }}>
            {children}
        </userStateContext.Provider>

    )
}

export default UserStateProvider
