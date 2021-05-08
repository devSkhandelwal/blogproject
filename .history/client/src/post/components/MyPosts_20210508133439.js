import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../shared/Message';
import { myPostListAction, postListAction } from '../actions/postAction';
import './MyPost.css'

const MyPosts = () => {
    
    const dispatch = useDispatch()
    const posts = useSelector(state=>state.myPosts);
    const {loading,error,myPosts} = posts
    const {userInfo} = useSelector(state => state.login)
    const {user} = useSelector(state => state.userDetails)
    const allPost = useSelector(state => state.postList)
    const {loading,error,posts} = allPost
  
    let allposts;
  
    if(user.isAdmin){
        allposts = {...posts}
    }else{
        allPosts = {...myPosts}
    }

    useEffect(()=>{
      if(userInfo){
        dispatch(userDetailsAction(userInfo.id))
      }
    },[dispatch,userInfo])

    
    useEffect(()=>{
        if(user.isAdmin){
            dispatch(postListAction())
        }else{
            dispatch(myPostListAction())
        }
    },[dispatch,user])

    return (
        <div className="myposts">
            {
                loading ? <h2>loading</h2> : error ? <Message vareint="danger">{error}</Message> :(
                    myPosts.length === 0 ? ( <div className="error-wrapper">  <Message vareint ="success">No Post yet</Message> </div>):(
                        <table className="posts_table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>title</th>
                                    <th>date</th>
                                    <th>description</th>
                                    <th>edit</th>
                                    <th>delete</th>
                                    <th>details</th>
                                </tr>
                          
                            </thead>
                            
                            <tbody>
                                {
                                    myPosts.map((post,index)=>(
                                        <tr key={post._id}>
                                            <td>{index + 1}</td>
                                            <td>{post.title}</td>
                                            <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                                            <td>{post.description}</td>
                                            <td>update</td>
                                            <td>delete</td>
                                            <td>details</td>
                                        </tr>
                                    ))
                                }
                                    
                            </tbody>
                        </table>
                    )
                )
            }
        </div>
        
    )
}

export default MyPosts
