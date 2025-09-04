import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>  
    <Link to ="/postpage/1">post 1</Link>
            <br></br>
            <Link to ="/postpage/2">post 2</Link>
            <br></br>
            <Link to ="/postpage/3">post 3</Link>
            <br></br>
            <Link to ="/postpage/4">post 4</Link>
            <br></br>
            <Link to ="/postpage/newpost">New Post</Link>
            <Outlet/>
    </>
  )
}

export default PostLayout