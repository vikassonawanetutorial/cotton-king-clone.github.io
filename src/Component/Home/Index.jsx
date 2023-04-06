import React from "react";
import Home_img from "./Home_img.jsx";
import Video_section from "./Video_section.jsx";
import Category from "./Category.jsx";
import New_arrival from "./New_arrival.jsx";
import Welcome_store from "./Welcome_store.jsx";
import Free_shipping from "./Free_shipping.jsx";

export default function Index(){
    return(
        <>
        <Home_img></Home_img>
        <Video_section></Video_section>
        <Category></Category>
        <New_arrival></New_arrival>
        <Welcome_store></Welcome_store>
        <Free_shipping></Free_shipping>
        </>
    )
}