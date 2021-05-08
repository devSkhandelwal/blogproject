import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MyPosts from '../../post/components/MyPosts';
import Button from '../../shared/formElements/Button';
import FormContainer from '../../shared/formElements/FormContainer';
import Input from '../../shared/formElements/Input';
import Message from '../../shared/Message';
import { userDetailsAction,userUpdateAction } from '../actions/userAction';

const Profile = ({history}) => {

    const dispatch = useDispatch();
    const userDetails = useSelector(state=> state.userDetails);
    


    const {user,loading,error} = userDetails;

    const [uName,setUName] = useState('');
    const [uEmail,setUEmail] = useState('');

  
    const {name,email} = user

    useEffect(()=>{
        
        if(!email || !name){
            dispatch(userDetailsAction('profile'))
        }else{
           
            setUName(name);
            setUEmail(email);
            
        }
    
    },[dispatch,name,email])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(userUpdateAction(uName,uEmail));
     
    }
   
    return (
        <div>
            <h2 className="heading">Profile</h2>
            {loading ? <h1>loading</h1> : error ? <div className="error-wrapper"> <Message vareint="danger">{error}</Message> </div>:(
                <div className="profile">
                    <FormContainer>
                        <form onSubmit={submitHandler}>
                        <h2 className="heading">update form</h2>
                            <Input
                                element="input"
                                name="name"
                                id="name"
                                type="text"
                                value={uName}
                                onChange={(e)=>setUName(e.target.value)}
                            />
                            <Input
                                element="input"
                                name="email"
                                id="email"
                                type="email"
                                value={uEmail}
                                onChange={(e)=>setUEmail(e.target.value)}
                            />
                            <Button varient="outlined" type="submit">Update</Button>
                        </form>
                    </FormContainer>
                    <div className="profile_posts">
                    <h2 className="heading">my Posts</h2>
                        <MyPosts/>
                    </div>
                </div>
            ) }
           
        </div>
    )
}

export default Profile
