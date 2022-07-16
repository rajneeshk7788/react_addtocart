import React from 'react'

import { useNavigate } from 'react-router-dom'



const Home = () => {
  const navigate = useNavigate();
  const onHandle=()=>{
  navigate("/product", {replace: false});
  }
  return (
    <div>
         <h1>Welcome To Food's Kitchen</h1>
         <button className='btn' onClick={onHandle}>GO TO MENU</button>
     
    </div>
  )
}

export default Home