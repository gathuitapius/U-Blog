import { BlogContext } from "../context/BlogContext";
import { useContext } from "react";



export const useBlogsContext = () => {
    const context = useContext(BlogContext);
    if(context === undefined)
    {
        throw new Error("useBlogContext must be used inside a useBlogContextProvider!!!")
    }

    return context
}