import { useReducer } from "react"
import {createContext} from "react"


export const BlogContext = createContext()

export const BlogReducer = (state, action) => {
    switch(action.type) {
        case 'SET_BLOGS':
            return {
                ...state,
                blogs: action.payload
            }

        case 'CREATE_BLOG':
            return {
                ...state,
                blogs:[action.payload, ...state.blogs]
            }

        case 'DELETE_BLOG':
            return {
                ...state,
                blogs: state.blogs.filter((b) => b._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const BlogContextProvider = ({children}) => { 

    const [state, dispatch] = useReducer(BlogReducer, {
        blogs: []
    })
    return (
        <BlogContext.Provider value={{...state, dispatch}}>
            {children}
        </BlogContext.Provider>
    )
}