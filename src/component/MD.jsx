import React,{useState} from 'react'


function MD({approved,setApproved}) {
    const handleMDApprove=()=>{
        setApproved("Approved")
    }
  return (
    <div>
    <h2>MD approve: {approved}</h2>
    <button onClick={()=>handleMDApprove()}><strong>Approve?</strong></button>
    
    
    </div>

  )
}


export default MD