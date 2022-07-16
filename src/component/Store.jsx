// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { Data } from '../component/Data'
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


const Store = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const item=useState(Data)
    // const navigate = useNavigate();

    // const [count, setCount] = useState({
    //     count1: "",
    //     c : 0,
    // })

    // const onChangeh = (e)=>{
    //     setCount(pre=>({...pre, count1: e,}))
    //     setCount(pre=>({...pre, c: count.c++}))
    // }
    // const onChanged = (e)=>{
    //     setCount(pre=>({...pre, count1: e,}))
    //     setCount(pre=>({...pre, c: count.c--}))
    // }

    // const handleChange=()=>{
    //     navigate("/thanks", {replace: false});
    //   }

  return (


<>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>




//     <div className='main-div-1'>
//     <div className='row-div-1'>
//         {/* {Data.map((item) => ( */}
//             <div className='card-1'>  
//                 {/* <div className='card-img-1'><img src={item.image} alt=""  className='card-img2'/></div> */}
//                 <div>
//                     <p  className='id-1'>{item.id}</p>
//                     <h2>{item.name}</h2>
//                     <p>Price : {item.price}</p>
//                     { count.count1  == item.id && <div>
//                         <p>Total : {count.c}</p>
//                         <p>Cost (INR) : {count.c * item.price}</p>
                        
//                     </div>}
                    
//                 </div>
//                 <div>
//                 <button className='p-1' onClick={()=>onChangeh(item.id)}>{"+"}</button>
//                 <button className='m-1' onClick={()=>onChanged(item.id)}>{"-"}</button>
//                 </div>
//                 <button onClick={handleChange}>Sumbit</button>
                
//             </div>
//         {/* ))} */}
//     </div>
// </div>
  )
}

export default Store