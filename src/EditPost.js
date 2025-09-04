import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditPost = ({posts, handleEdit,editBody,seteditBody,editTitle,seteditTitle})=>
{
  const{id }=useParams();
  const post =posts.find(post=>(post.id).toString()===id);

  useEffect(()=>{
    if(post){
      seteditTitle(post.title);
      seteditBody(post.body);
    }
  },[post,seteditTitle,seteditBody])

  return(
    <main className="NewPost">
    {editTitle &&
    <>
<h2> Edit post</h2>
<form className='newPostForm'
onSubmit={ (e)=>e.preventDefault()}
>
  <label
  htmlFor="postTitle"> Title: </label>
  <input  
  id="postTitle"
  type="text"
  required
  value={editTitle}
onchange={(e)=>seteditTitle(e.target.value)}
/>

<label
htmlFor ="postBody">Post:</label>
<textarea 
id="postBody"
required
value={editBody}
onChange={(e)=>seteditBody(e.target.value)}
/>
<button type="submit" onClick={()=> handleEdit(post.id)}> submit  </button>
</form>
    </>
}    
  {!editTitle &&
  <>
  <h2>  post not found </h2>
  <p>
    well, that is dis appointing </p>
  <p> <Link to ='/'> visit this </Link>
  </p></>
  }
  </main>
  )}
  export default EditPost