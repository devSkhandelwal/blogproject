import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/formElements/Button';
import Message from '../../shared/Message';
import { postListAction } from '../actions/postAction';

const AdminPostList = () => {

    const dispatch = useDispatch()

    const postList = useSelector(state=>state.postList);
    const {loading,error,posts} = postList;


    
    useEffect(()=>{
        dispatch(postListAction())
    },[dispatch])



    return (
        <div className="myposts">
        {
            loading ? <h2>loading</h2> : error ? <Message vareint="danger">{error}</Message> :(
                posts.length === 0 ? ( <div className="error-wrapper">  <Message vareint ="success">No Post yet</Message> </div>):(
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
                                posts.map((post,index)=>(
                                    <tr key={post._id}>
                                        <td>{index + 1}</td>
                                        <td>{post.title}</td>
                                        <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                                        <td>{post.description}</td>
                                        <td>
                                        
                                            <Button to={`/update/post/${post._id}`}>
                                                update
                                            </Button>    
                                        </td>
                                        <td>
                                            <Button to={`/delete/post/${post._id}`}>
                                                delete
                                            </Button> 
                                        </td>
                                        <td>
                                            <Button to={`/details/post/${post._id}`}>
                                                details
                                            </Button> 
                                        </td>
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

export default AdminPostList;
