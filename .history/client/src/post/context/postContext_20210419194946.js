import React,{useContext} from 'react'
import axios from 'axios'

const PostContext = React.createContext()

export function usePost(){
    return useContext(PostContext)
}

const PostProvider = ({children}) => {
    const addPost = async ({title,description}) => {
        const post = {title,description}
        console.log('post':post)
        // return await axios.post('',post)
    }


    const value = {
        addPost
    }

    return(
        <PostContext.Provider value={value}>
            {children}
        </PostContext.Provider>
    )
}


export default PostProvider;