import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { postListAction } from '../actions/postAction'

const Home = () => {


    const dispatch = useDispatch()

    const postList = useSelector(state=>state.postList);
    const {loading,error,posts} = postList;


    
    useEffect(()=>{
        dispatch(postListAction())
    },[dispatch])

    
    if(posts.length === 0){
        return(
            <h1>No Post Yet</h1>
        )
    }

    return (
        <>
            hi
        </>
    )
}

export default Home
