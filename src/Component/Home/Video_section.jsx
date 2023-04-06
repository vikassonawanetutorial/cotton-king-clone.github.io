import React from "react";
import "./index.css";

export default function Video_section(){
    return(
        <>
          <section style={{'background-color':'whitesmoke'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 text-center video_section">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcottonkingofficialpage%2Fvideos%2F390411286452479%2F&show_text=0&width=560"
                            width="100%" height="315"
                            style={{'border':'none', 'margin-top':'80px', 
                            'overflow':'hidden', 'scrolling':'no'}}
                            frameborder="0" allowfullscreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            allowFullScreen="true" className="  mb-5"> </iframe>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}