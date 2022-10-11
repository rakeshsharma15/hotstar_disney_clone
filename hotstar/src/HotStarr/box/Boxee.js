import React,{useState,useRef} from 'react'

const Boxee = (props) => {
    const [state, setstate] = useState(true)
    const vidRef = useRef()
    const Chnge=()=>{
        setstate(false)
    }
    const Leave=()=>{
        setstate(true)
    }
    return (
        <div>
         {state?<img src={props.imgsrc} alt="" className="im" onMouseEnter={Chnge}/>:<video src={props.videos} autoPlay={true} loop className="im" onMouseOut={Leave}/>}
        </div>
    )
}

export default Boxee
