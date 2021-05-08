import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myPostListAction } from '../actions/postAction';

const MyPosts = () => {
    
    const dispatch = useDispatch()
    const myPosts = useSelector(state=>state.myPosts);
    console.log(myPosts)

    useEffect(()=>{
        dispatch(myPostListAction())
    },[dispatch])

    return (
        <table className="myposts">
            <thead>
                <tr>
                    <th>#</th>
                    <th>#</th>
                    <th>#</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{myPosts.title}</td>
                    <td>{myPosts.description}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default MyPosts
