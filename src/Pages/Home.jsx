import React from 'react'
import VoidSection from '../Components/Home/The_void'
import RecentPosts from '../Components/Home/Recent_Post'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

const Home = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/post");
  };
  return (
    <div className='home-page'>
     <VoidSection/>
     <RecentPosts/>
     <div className="text-center my-4" onClick={handleClick}>
          <Button className="all-posts-btn text-white">All Posts </Button>
        </div>
    </div>
  )
}

export default Home