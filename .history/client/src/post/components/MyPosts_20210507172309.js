import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../shared/Message';
import { myPostListAction } from '../actions/postAction';

const MyPosts = () => {
    
    const dispatch = useDispatch()
    const posts = useSelector(state=>state.myPosts);
    console.log(posts)
    const {loading,error,myPosts} = posts

    useEffect(()=>{
        dispatch(myPostListAction())
    },[dispatch])

    return (
        <>
            {
                loading ? <h2>loading</h2> : error ? <Message vareint="danger">{error}</Message> :(
                    myPosts.length === 0 ? ( <div className="error-wrapper">  <Message vareint ="success">No Post yet</Message> </div>):(
                        <table className="myposts">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>title</th>
                                    <th>date</th>
                                    <th>description</th>
                                    <th>edit</th>
                                    <th>delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{myPosts.title}</td>
                                    <td>{myPosts.date}</td>
                                    <td>{myPosts.description}</td>
                                    <td>update</td>
                                    <td>delete</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                )
            }
        </>
        
    )
}

export default MyPosts
