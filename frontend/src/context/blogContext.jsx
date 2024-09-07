import { useReducer } from "react"
import {Children, createContext} from "react"


export const BlogContext = createContext()

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

export const BlogContextProvider = ({Children}) => { 

    const [state, dispatch] = useReducer(blogReducer, {
        blogs: null
    })
    return (
        <BlogContext.Provider value={{...state, dispatch}}>
            {Children}
        </BlogContext.Provider>
    )
}