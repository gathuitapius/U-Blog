import { useReducer } from "react"
import {Children, createContext} from "react"


export const blogContext = createContext()

export const blogReducer = (state, action) => {
    switch(action.type) {
        case 'SET_BLOGS':
            return {
                blogs: action.payload
            }

        case 'CREATE_BLOG':
            return {
                blogs:[action.payload, ...state.blogs]
            }
        default:
            return state
    }
}

export const blogContextProvider = ({Children}) => { 

    const [state, dispatch] = useReducer(blogReducer, {
        blogs: null
    })
    return (
        <blogContext.Provider value={{state, dispatch}}>
            {Children}
        </blogContext.Provider>
    )
}