import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { postListAction } from '../actions/postAction'
import PostList from '../components/PostList'

const Home = () => {


    const dispatch = useDispatch()

    const postList = useSelector(state=>state.postList);
    const {loading,error,posts} = postList;


    
    useEffect(()=>{
        dispatch(postListAction())
    },[dispatch])


    
    return (
        <>
            <div className="posts">
                <PostList posts={posts} />
            </div>
        </>
    )
}

export default Home
