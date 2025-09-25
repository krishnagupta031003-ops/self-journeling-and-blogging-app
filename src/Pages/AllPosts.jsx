import React from 'react'
import appwriteService from '../appwrite/config'
import {Container, PostCard} from '../components'
import { useState, useEffect } from 'react'

function AllPosts() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((posts)=>{
      if(posts){
       setPosts(posts.documents)
      }
    })
  return (
    <div className='w-full py-8'>
      <Container>
        {posts.map((post)=>(
          <div className='p-2 w-1' key={post.$id}>
            <PostCard post={post}/>
          </div>
        ))}
        </Container>
        </div>
  )
}

export default AllPosts