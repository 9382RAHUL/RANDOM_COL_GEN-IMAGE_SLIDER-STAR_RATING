import React, { useState } from 'react'
import {FaStar  } from 'react-icons/fa'
import "./rate.css";
const Rating = ({noofstar=5}) => {
    const [rating,setrating]=useState(0);
    const [hover,sethover]=useState(0);
    const handleclick=(getcurrentid)=>{
            console.log(getcurrentid)
            setrating(getcurrentid);
    }
    const handlemouseover=(getcurrentid)=>{
     sethover(getcurrentid);

    }
    const handlemouseleave=()=>{
      sethover(rating);

    }
  return (
    <>
        <div className="rating">
            {
                [...Array(noofstar)].map((__,index)=>{
                    index+=1;
                    return (
                        <FaStar
                        fontSize="40px"
                        className={index <=(hover|| rating)?"active":"inactive"}
                        key={index}
                            onClick={()=>handleclick(index)}
                            onMouseOver={()=>handlemouseover(index)}
                            onMouseLeave={()=>handlemouseleave(index)}
                        />
                    )
                })
            }
        </div>
    </>
  )
}

export default Rating