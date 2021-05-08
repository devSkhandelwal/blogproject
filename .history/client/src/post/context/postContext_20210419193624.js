import axios from 'axios'

const PostProvider = ({children}) => {
    const AddPost = ({title,description}) => {
        const post = {title,description}
        axios.post('',post)
    }
}