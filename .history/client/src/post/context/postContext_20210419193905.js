import axios from 'axios'

const 

const PostProvider = ({children}) => {
    const AddPost = async ({title,description}) => {
        const post = {title,description}
        console.log(post)
        // return await axios.post('',post)
    }


    const value = {
        AddPost
    }

    return{
        <
    }
}