import React,{useContext} from 'react'
import axios from 'axios'

const PostContext = React.createContext()

export function useAuth(){
    return useContext(PostContext)
}

const PostProvider = ({children}) => {
    const AddPost = async ({title,description}) => {
        const post = {title,description}
        console.log(post)
        // return await axios.post('',post)
    }


    const value = {
        AddPost
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export default PostProvider;