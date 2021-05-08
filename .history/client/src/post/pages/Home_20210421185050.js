import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { userLogoutAction } from '../../user/actions/userAction'
import { postListAction } from '../actions/postAction'
import PostList from '../components/PostList'

const Home = () => {


    const dispatch = useDispatch()

    const postList = useSelector(state=>state.postList);
    const {loading,error,posts} = postList;


    
    useEffect(()=>{
        dispatch(postListAction())
    },[dispatch])


    const logout = () =>{
        dispatch(userLogoutAction())
    }

    return (
        <div className="posts">
            <button onClick={logout}>Logout</button>
            <PostList posts={posts} />
        </div>
    )
}

export default Home
