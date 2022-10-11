import React, { useState } from 'react'
import './Navigation.css'

const Navigation = () => {
    const [state, setstate] = useState(true)
    return (
        <div className="navigationbar">
            <div className="navleft">
            <div className="another" id={state ? "hidden":""}>
                <h4>Disney + hotstar</h4>
                <h4>TV</h4>
                <h4>Movies</h4>
                <h4>Sports</h4>
                <h4>Disney +</h4>
                <h4 style={{color:'orange'}}>Kids</h4>
                </div>
                <button onClick={()=>setstate(!state)}><i className="fa fa-bars"></i></button>
            </div>
            <div className="navright">
               <input type="text" placeholder="search"/>
               <h4 style={{color:'white',background:'blue',marginRight:'30px',borderRadius:"3px",cursor:'pointer',width:'75px',padding:'2px'}}>Subscribe</h4>
               <h4>Login</h4>
            </div>
        </div>
    )
}

export default Navigation
