import React,{useState} from 'react'

function Otp() {
const[inputvalue,setinputvalue] = useState('')
const myfunc = () =>{
    const myvar = "0123456789"
    let t =''
    for(let i=0; i<4; i++)
        {
            t +=myvar[Math.floor(Math.random()*myvar.length)]
        }
        setinputvalue(t)
}
  return (
    <div className='card'>
        <input type='text' value={inputvalue} />
        <button onClick={myfunc}>Gen</button>
    </div>
  )
}

export default Otp