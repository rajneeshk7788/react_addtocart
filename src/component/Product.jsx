import React, { useState } from 'react'
import { Data } from '../component/Data'

const Product = () => {
   const [count, setCount] = useState({
        count1: "",
        c : 0,
    })

    const onChangeh = (e)=>{
        setCount(pre=>({...pre, count1: e,}))
        setCount(pre=>({...pre, c: count.c++}))
    }
    const onChanged = (e)=>{
        setCount(pre=>({...pre, count1: e,}))
        setCount(pre=>({...pre, c: count.c--}))
    }



    return (
        <div className='main-div'>
            <div className='row-div'>
                {Data.map((item) => (
                    <div className='card'>  
                        <div className='card-img'><img src={item.image} alt=""  className='card-img1'/></div>
                        <div>
                            <p  className='id'>{item.id}</p>
                            <h2>{item.name}</h2>
                            <p>Price : {item.price}</p>
                            { count.count1  == item.id && <div>
                                <p>Total : {count.c}</p>
                                <p>Cost (INR) : {count.c * item.price}</p>
                                
                            </div>}
                            
                        </div>
                        <div>
                        <button className='p' onClick={()=>onChangeh(item.id)}>{"+"}</button>
                        <button className='m' onClick={()=>onChanged(item.id)}>{"-"}</button>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product