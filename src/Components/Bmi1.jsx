import React, {useState} from 'react'

function Demo() {

    const[weight,setweight] = useState("")
    const[height,setheight] = useState("")
    const[result,setresult] = useState("")

    const Bmi = () => 
        {
            setresult((weight)/((height*2)^2))
        }
  return (
    <div className='d-flex mt-5'>
        <div className="container-fluid justify-content-center align-items-center mt-5 px-3 w-25 h-50 border shadow">
            <h2 className='text-center'>BMI Calculator</h2>
            <input type="text" className='mt-3' placeholder="Weight" value={weight} onChange={(e) => setweight(e.target.value)}/>
            <input type="text" className='mt-3' placeholder="Height" value={height} onChange={(e) => setheight(e.target.value)}/>
            <button type="submit" className='d-flex mt-3 bg-primary text-light' value="bmi" onClick={Bmi}> Calculate </button>
            </div>
            <div className="container-fluid justify-content-center align-items-center mt-5 w-25 h-25 shadow border">
            <p id='show' className='text-center mt-3'>
                {result}
            </p>
        </div>
        </div>
    )
}

export default Demo