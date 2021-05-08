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

    

    return (
        <>
            <div className="home">
                {error}
            </div>    
        </>
    )
}

export default Home
