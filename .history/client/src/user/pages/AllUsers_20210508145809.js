import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { userListAction } from '../actions/userAction'
import UserList from '../components/UserList'

const AllUsers = () => {
    
    const dispatch = useDispatch()
    const userList = useSelector(state=>state.userList)
    
    const {users,loading,error} = userList

    useEffect(()=>{
        dispatch(userListAction())
    },[dispatch])
    console.log(users)
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

export default AllUsers
