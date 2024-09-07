import { blogContext } from "../context/blogContext";
import { useContext } from "react";



export const useBlogsContext = () => {
    const context = useContext(blogContext);
    if(!context)
    {
        throw Error("useBlogContext must be used inside a useBlogContextProvider!!!")
    }
}