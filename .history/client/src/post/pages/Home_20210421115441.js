import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { postListAction } from '../actions/postAction'

const Home = () => {


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(postListAction())
    })

    const postList = useSelector(state=>state.postList)

    return (
        <>
            <div className="home">
                
            </div>    
        </>
    )
}

export default Home
