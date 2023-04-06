import React from "react";

export default function Welcome_store(){
    return(
        <>
         {/* WELCOME TO STORE  SECTION */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="mt-5 mb-4 text text-center font-weight-bold" style={{'color':'black'}}>WELCOME TO STORE
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 text-center mb-5 ">
                        <h6 className="d-inline-block p-3 m-2 font-weight-bold"
                            style={{'background-color':'#28b293'}}>BEST SELLERS</h6>
                        <h6 className="d-inline-block p-3 m-2 font-weight-bold" style={{ 'background-color':'#ced4da'}}>MOST LIKED</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-5 mb-lg-5">
                        <div className="card new_arrival shadow-lg" style={{}}>
                            <div className="card-body ">
                                <img src="shirt_img13.jpg" alt="" width="100%"/>
                                <ul className="heart_eye">
                                    <li>
                                        <p className=" ml-4 mt-3" style={{'color':'gray', 'float':'left', 'font-size': '12px'}}>
                                            AEROSOFT</p>
                                    </li>
                                    <li><i className="fa-solid fa-heart float-left   mt-3"
                                            style={{'color':'#28b293', 'margin-left':'43px'}}></i></li>
                                    <li><i className="fa-solid fa-eye   ml-2 mt-3" style={{'color':'#28b293'}}></i></li>
                                </ul>
                                <h6 className=" font-weight-bold " style={{'font-size':'15px'}}>Formal Shirt_33460
                                </h6>
                                <h6 style={{'color':'black'}}> Available Size : 39, 40</h6>
                                <h2 style={{'color':'#28b293'}} className="font-weight-bold mt-2">₹ 995 </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-5 mb-lg-5">
                        <div className="card new_arrival shadow-lg" style={{}}>
                            <div className="card-body ">
                                <img src="shirt_img14.jpg" alt="" width="100%"/>
                                <ul className="heart_eye">
                                    <li>
                                        <p className=" ml-4 mt-3" style={{'color':'gray', 'float':'left','font-size': '12px'}}> NEW
                                            ARRIVAL</p>
                                    </li>
                                    <li><i className="fa-solid fa-heart float-left   mt-3"
                                            style={{'color':'#28b293', 'margin-left':'30px'}}></i></li>
                                    <li><i className="fa-solid fa-eye   ml-2 mt-3" style={{'color':'#28b293'}}></i></li>
                                </ul>
                                <h6 className=" font-weight-bold " style={{'font-size':'15px'}}>T_Shirt_30859
                                </h6>
                                <h6 style={{'color':'black'}}> Available Size : </h6>
                                <h2 style={{'color':'#28b293'}} className="font-weight-bold mt-2">₹ 695 </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-5 mb-lg-5">
                        <div className="card new_arrival shadow-lg" style={{}}>
                            <div className="card-body ">
                                <img src="shirt_img15.jpg" alt="" width="100%"/>
                                <ul className="heart_eye">
                                    <li>
                                        <p className=" ml-4 mt-3" style={{'color':'gray', 'float':'left', 'font-size': '12px'}}> NEW
                                            ARRIVAL</p>
                                    </li>
                                    <li><i className="fa-solid fa-heart float-left   mt-3"
                                            style={{'color':'#28b293', 'margin-left':'30px'}}></i></li>
                                    <li><i className="fa-solid fa-eye   ml-2 mt-3" style={{'color':'#28b293'}}></i></li>
                                </ul>
                                <h6 className=" font-weight-bold " style={{'font-size':'15px'}}>T_Shirt_36176
                                </h6>
                                <h6 style={{'color':'black'}}> Available Size : 39 </h6>
                                <h2 style={{'color':'#28b293'}} className="font-weight-bold mt-2">₹ 695 </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-5 mb-lg-5">
                        <div className="card new_arrival shadow-lg">
                            <div className="card-body ">
                                <img src="shirt_img16.jpg" alt="" width="100%"/>
                                <ul className="heart_eye">
                                    <li>
                                        <p className=" ml-4 mt-3" style={{'color':'gray','float':'left', 'font-size': '12px'}}> NEW
                                            ARRIVAL</p>
                                    </li>
                                    <li><i className="fa-solid fa-heart float-left   mt-3"
                                            style={{'color':'#28b293', 'margin-left':'30px'}}></i></li>
                                    <li><i className="fa-solid fa-eye   ml-2 mt-3" style={{'color':'#28b293'}}></i></li>
                                </ul>
                                <h6 className=" font-weight-bold " style={{'font-size':'15px'}}>Formal_Shirt_33462
                                </h6>
                                <h6 style={{'color':'black'}}> Available Size : 42 </h6>
                                <h2 style={{'color':'#28b293'}} className="font-weight-bold mt-2">₹ 995 </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}