import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { postListAction } from '../actions/postAction'

const Home = () => {


    const dispatch = useDispatch()

    const postList = useSelector(state=>state.postList);

    const {loading,error,posts} = postList;

    console.log(posts)
    
    useEffect(()=>{
        dispatch(postListAction())
    },[dispatch])

    

    return (
        <>
            <div className="home">
                
            </div>    
        </>
    )
}

export default Home
