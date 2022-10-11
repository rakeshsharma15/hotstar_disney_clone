import React,{useState} from 'react'
import AllSlide from '../AllSlide/AllSlide'
import './Sliderone.css'

const Sliderone = () => {
    return (
        <div className="Slid">
       <AllSlide name="Cartoon" value='-3780'/>
       <AllSlide name="Latest" value='-2520'/>
       <AllSlide name="Superheroes" value='-2520'/>
        </div>
    )
}

export default Sliderone
