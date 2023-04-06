import React from "react";

export default function Category(){
    return(
        <>
          {/* PRODUCT CATEGORIES section  */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center font-weight-bold mt-5 mb-5" style={{'color':'black'}}>PRODUCT CATEGORIES</h2>
                    </div>
                </div>
                <div className="row  shadow-lg justify-content-center">
                    <div className="col-lg-3 col-sm-12 text-center mb-3 mt-3">
                        <img src="shirt.jfif" alt="" className="product_category" height="240px"/>
                    </div>
                    <div className="col-lg-3 col-sm-12 text-center mb-3 mt-3">
                        <img src="collections.jpg" alt="" className="product_category" height="240px"/>
                    </div>
                    <div className="col-lg-3 col-sm-12 text-center mb-3 mt-3">
                        <img src="t-shirt.jfif" alt="" className="product_category" height="240px"/>
                    </div>
                    <div className="col-lg-3 col-sm-12 text-center mb-3 mt-3">
                        <img src="jeans.png" alt="" className="product_category" height="240px"/>
                    </div>
                </div>
            </div>
        </>
    )
}