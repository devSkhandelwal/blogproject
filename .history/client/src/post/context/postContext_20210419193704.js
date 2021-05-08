import axios from 'axios'

const PostProvider = ({children}) => {
    const AddPost = async ({title,description}) => {
        const post = {title,description}
        console.log(post)
        return await axios.post('',post)
    }
}