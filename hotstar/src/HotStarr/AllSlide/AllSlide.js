import React,{useState,useRef} from 'react'
import { HotstarList } from '../../HotstarList'

const AllSlide = (props) => {
    const [state, setstate] = useState(0)
    const inref=useRef()
    const handleChange=()=>{
        setstate(state - 1260)
    }
    const handleChang=()=>{
        setstate(0)
    }
    return (
        <>
             <h3 style={{color:'white',marginLeft:'50px',fontSize:'25px'}}>{props.name}</h3>
        <div className="Slider" >
        <i className="fa fa-angle-left" aria-hidden="true" onClick={handleChang} style={{position:'relative',color:'white',fontSize:'50px',zIndex:'108',left:'20px',cursor:'pointer'}}></i>
        <button style={{backgroundColor:'black'}} disabled={state==props.value} style={{position:'absolute',color:'white',fontSize:'50px',zIndex:'108',left:'1290px',cursor:'pointer'}} onClick={handleChange} ><i className="fa fa-angle-right" aria-hidden="true" ></i></button>
            {HotstarList.filter((val)=>{
      return val.name==props.name
    }).map((val)=>{
        return(
            <div style={{transform: `translateX(${state}px)`,transition:"2s all ease"}} >
            <img src={val.imgsrc} alt="" className="latest" ref={inref}/>
            </div>
        )
    })}
    </div>
        </>
    )
}

export default AllSlide
