import React,{useState} from 'react'
import './Box.css'
 
const Box = () => {
    return (
        <div className="topbox">
            <div className="bx">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" alt="fd" className="m"/>
            </div>
            <div className="bx">
                <img src="https://cssanimation.rocks/images/posts/starwars/starwars.jpg" alt="" className="m"/>
            </div>
            <div className="bx">
                <img src="https://hyperpix.net/wp-content/uploads/2019/08/disney-logo-font-download-1200x900.jpg" alt="" className="m"/>
            </div>
            <div className="bx">
                <img src="https://adwallpapers.xyz/uploads/posts/236459-collage-movies-text-animated-movies-Pixar-Animation-Studios-brand-Disney-Pixar-advertising-screenshot-presentation-modern-art-font.jpg" alt="" className="m"/>
            </div>
            <div className="bx">
                <img src="https://w7.pngwing.com/pngs/579/384/png-transparent-cartoon-network-logo-cartoon-network-logo-television-animation-cartoon-network-television-angle-text.png" alt="" className="m"/>
            </div>
        </div>
    )
}

export default Box
