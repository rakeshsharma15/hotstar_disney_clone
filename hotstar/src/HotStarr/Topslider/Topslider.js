import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Topslider.css'
import Slider from "react-slick";
import Boxee from '../box/Boxee';

const Topslider = () => {
  var settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: 'caro'
  };
  return (
    <div style={{ background: " rgb(17, 17, 61)", }}>
      <Slider {...settings} >
      <Boxee imgsrc="https://lh3.googleusercontent.com/wOm7mvcWM0Clt4N4NJzm69MbP_44M_Kuk4gHiyZefO4jwd1_M7pO3_7eN7WN7tIQMNY=h1024-no-tmp_crayon_shin_chan_wallpaper_hd_apk.jpg" videos="/shinchan.mp4"/>
      <Boxee imgsrc="https://swall.teahub.io/photos/small/8-81709_doraemon-wallpaper-doraemon-wallpaper-hd.jpg" videos="/doremon.mp4"/>
      <Boxee imgsrc="https://wallpaperaccess.com/full/1675031.jpg" videos="/oggy.mp4"/>
      <Boxee imgsrc="https://www.kindpng.com/picc/m/111-1117192_chota-bheem-png-birthday-chota-bheem-images-png.png" videos="/chota.mp4"/>
      <Boxee imgsrc="https://i.pinimg.com/550x/9b/f4/bd/9bf4bdf39be872a09735d23d33f97aa0.jpg" videos="/ninja.mp4"/>
      <Boxee imgsrc="https://wallpaperaccess.com/full/2361441.jpg" videos="/tom.mp4"/>
      </Slider></div>
  )
}

export default Topslider
