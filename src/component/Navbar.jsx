import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate();
  const handleChange=()=>{
    navigate("/store", {replace: false});
  }
  return (
    <div className='row'>
          <div className='col'>
            <span><img src="https://i.im.ge/2022/07/15/FoqYKF.jpg" alt="" className='img1'/></span>
           <h3 className='h3'>Pinaki's Resturant</h3> </div>
          <div><img src="https://i.im.ge/2022/07/15/FoqDb1.jpg" alt=""  className='img2' onClick={handleChange}/></div>
         <div>
    
         </div> 
          
    </div>
  )
}

export default Navbar

