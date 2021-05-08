import React,{useContext} from 'react'
import axios from 'axios'

const PostContext = React.createContext()

export function usePost(){
    return useContext(PostContext)
}

const PostProvider = ({children}) => {
    
    const addPost = async (title,description) => {
        console.log(title)
        const post = {title,description}

        const message = await axios.post('http://localhost:5000/api/addpost',{title,description})

        console.log(message)
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