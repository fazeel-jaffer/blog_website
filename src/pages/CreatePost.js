import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from "../firebase-config";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const postsCollectionRef = collection(db, 'posts');
  const navigate=useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, { title, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } });
    swal({
      title: "Post Added",
      icon: "success",
    });
    navigate("/");
  }
  useEffect(()=>{
   if(!isAuth){
    navigate("/login");
   }
  },[])
  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputGp'>
          <label>Title:</label>
          <input placeholder='Title..' onChange={(e) => { setTitle(e.target.value) }} />
        </div>
        <div className='inputGp'>
          <label>Post:</label>
          <textarea placeholder='Post...' onChange={(e) => { setPostText(e.target.value) }} />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost