import axios from 'axios'

const PostProvider = ({children}) => {
    const AddPost = async ({title,description}) => {
        const post = {title,description}
        await axios.post('',post)
    }
}