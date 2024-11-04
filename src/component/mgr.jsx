import React from 'react'
import MD from './MD'


function Mgr({approved,setApproved}) {

    
  return (
    <div>
    <h2>Manager Approve: {approved} </h2>
    <button onClick={()=>alert("Manager:I am sick, please contact MD.")}><strong>Approve?</strong></button>
    <MD approved={approved} setApproved={setApproved} />
    </div>

  )
}

export default Mgr