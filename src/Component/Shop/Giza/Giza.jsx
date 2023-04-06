import React from "react";

export default function Giza() {
    return (
        <>
            {/* <!-- shop collection section   */}
            <section style={{ 'background-color': '#f5f5f5' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="font-weight-bold mt-4">SHOP - Collections   GIZA</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <ul className="bg-white border mt-4">
                                <li className="list-group "><a href="#" style={{ 'color': 'black' }} className="mt-3 ml-3 font-weight-bold"><img src="shirt_img10.jpeg" alt="" height="20px" width="20px" />COLLECTION<i
                                    className="fa fa-plus-circle font-weight-bold" style={{ 'margin-left': '60px' }}></i></a></li>
                                <hr />
                                <li className="list-group "><a href="#" style={{ 'color': 'black' }} className="ml-3  font-weight-bold"><img
                                    src="shirt_img9.jpeg" alt="" height="20px" width="20px" />SHIRT <i
                                        className="fa fa-plus-circle font-weight-bold" style={{ 'margin-left': '110px' }}></i></a></li>
                                <hr />
                                <li className="list-group "><a href="#" style={{ 'color': 'black' }} className="ml-3 font-weight-bold "><img
                                    src="shirt_img1.jpeg" alt="" height="20px" width="20px" />T-SHIRT</a></li>
                                <hr />
                                <li className="list-group "><a href="#" style={{ 'color': 'black' }} className="ml-3 font-weight-bold "><img
                                    src="jeans.png" alt="" height="20px" width="20px" />JEANS</a></li>
                                <hr />
                                <li className="list-group "><a href="#" style={{ 'color': 'black' }} className="ml-3  font-weight-bold"><img
                                    src="jeans.png" alt="" height="20px" width="20px" />TROUSERS</a></li>
                                <hr />
                                <li className="list-group "><a href="#" style={{ 'color': 'black' }} className="ml-3 mb-3 font-weight-bold"><img
                                    src="shirt.jfif" alt="" height="20px" width="20px" />NEW ARRIVAL</a></li>
                                <hr />
                                <li className="ml-3" style={{ 'list-style': 'none' }}><button
                                    className="btn btn-dark mt-4 float-left text-white font-weight-bold ">RESET</button></li>
                                <li style={{ 'list-style': 'none' }}><button
                                    className="btn btn-primary ml-3 mb-4 mt-4  text-white font-weight-bold ">APPLY</button></li>
                            </ul>
                        </div>
                        <div className="col-9 ">
                            <div className="input_bar">
                                <h6 className="mt-3 ml-3 text-dark float-left">Display <i className="fa-solid fa-bars ml-2"></i></h6>
                                <li className="dropdown w-100" style={{ 'list-style-type': 'none' }}>
                                    <button className="btn mt-2  dropdown-toggle float-right" type="button" id="dropdownMenuButton"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Newest
                                    </button>
                                    <div className="dropdown-menu ">
                                        <a className="dropdown-item " href="#"> Newest</a>
                                        <a className="dropdown-item " href="#">A-Z</a>
                                        <a className="dropdown-item " href="#">Z-A</a>
                                        <a className="dropdown-item " href="#">Price:High To Low</a>
                                        <a className="dropdown-item " href="#">Price:Low To High</a>
                                    </div>
                                </li>
                            </div>
                            {/* <!-- giza shirt collection   */}
                            {/* <!-- giza shirt no 1   */}
                            <div className="row">
                                <div className="col-lg-4 col-sm-12 mt-5 mb-5 w-100 ">
                                    <div className="card new_arrival border-0 shadow-lg">
                                        <div className="card-body ">
                                            <img src="giza1.jpeg" alt="" width="100%" />
                                            <ul className="heart_eye">
                                                <li>
                                                    <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>
                                                        GIZA</p>
                                                </li>
                                                <li><i className="fa-solid fa-heart float-left ml-5  mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                                <li><i className="fa-solid fa-eye float-left  ml-2 mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                            </ul>
                                            <div className="card-footer  border-0  pl-0 bg-white">
                                                <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Light Pink Giza
                                                    Formal Shirt_39931</h6><br /><br />
                                                <h6 style={{ 'color': 'black', 'margin-left': '0px' }}> Available Size : 40</h6>
                                                <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1495</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  giza shirt no 2   */}
                                <div className="col-lg-4 col-sm-12 mt-5 mb-5 w-100 ">
                                    <div className="card new_arrival border-0 shadow-lg">
                                        <div className="card-body ">
                                            <img src="giza_shirt2.jpeg" alt="" width="100%" />
                                            <ul className="heart_eye">
                                                <li>
                                                    <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>
                                                        GIZA</p>
                                                </li>
                                                <li><i className="fa-solid fa-heart float-left ml-5  mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                                <li><i className="fa-solid fa-eye float-left  ml-2 mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                            </ul>
                                            <div className="card-footer  border-0  pl-0 bg-white">
                                                <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Maroon Plain
                                                    Formal Shirt_39948.</h6><br /><br />
                                                <h6 style={{ 'color': 'black' }}className="mt-2"> Available Size :39, 42, 44</h6>
                                                <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495 </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  giza shirt no-- 3   */}
                                <div className="col-lg-4 col-sm-12 mt-5 mb-5 w-100 ">
                                    <div className="card new_arrival border-0 shadow-lg">
                                        <div className="card-body ">
                                            <img src="giza_shirt3.jpeg" alt="" width="100%" />
                                            <ul className="heart_eye">
                                                <li>
                                                    <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>
                                                        GIZA</p>
                                                </li>
                                                <li><i className="fa-solid fa-heart float-left ml-5  mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                                <li><i className="fa-solid fa-eye float-left  ml-2 mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                            </ul>
                                            <div className="card-footer  border-0  pl-0 bg-white">
                                                <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Blue Checks Slim
                                                    Formal Shirt_S38496</h6><br /><br /><br />
                                                <h6 style={{ 'color': 'black' }}> Available Size :39, 42</h6>
                                                <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1495</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- secound row GIZA shirt collection   */}
                    {/* <!-- giza shirt no 4   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt4.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Maroon Plain Slim Formal
                                            Shirt_S38476.</h6><br />
                                        <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39, 42</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1595</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  giaz shirt no 5   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt5.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> White Plain Slim Formal
                                            Shirt_S7350.</h6><br />
                                        <h6 style={{ 'color': 'black' }} className="mt-1"> Available Size :40</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1495</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  giza shirt no 6   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt6.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                    </ul>
                                    <div className="card-footer  border-0  pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Multicolor Checks Slim
                                            Formal Shirt_S38498</h6><br /><br />
                                        <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  therd row GIZA shirt collection   */}
                    {/*  giza shirt no 7   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt7.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                    </ul>
                                    <div className="card-footer  border-0  pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Light Yellow Plain Slim
                                            Formal Shirt_S38347.</h6><br /><br />
                                        <h6 style={{ 'color': 'black' }}className="mt-2"> Available Size :39</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  giaz shirt no 8   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt8.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                    </ul>
                                    <div className="card-footer  border-0  pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Plain Maroon Cottonking
                                            Formal Shirt_S38344.</h6><br /><br />
                                        <h6 style={{ 'color': 'black' }}className="mt-2"> Available Size :</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- giza shirt no 9   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt9.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                    </ul>
                                    <div className="card-footer  border-0  pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Plain Blue Cottonking
                                            Slim Formal Shirt_S38479</h6><br /><br />
                                        <h6 style={{ 'color': 'black' }}className="mt-2"> Available Size :39</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1595 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--  fourth row GIZA shirt collection   */}
                    {/* <!-- giza shirt no 10   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt10.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                    </ul>
                                    <div className="card-footer  border-0  pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Checks Light Pista
                                            Cottonking Slim Formal .</h6><br /><br />
                                        <h6 style={{ 'color': 'black' }}className="mt-2"> Available Size :39</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  giaz shirt no 11   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt11.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Plain Maroon Cottonking
                                            Formal _38344.</h6><br />
                                        <h6 style={{ 'color': 'black' }}className="mt-1"> Available Size :39, 40, 42</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  giza shirt no 12   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body">
                                    <img src="giza_shirt12.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Plain Light Green
                                            Cottonking Formal </h6><br />
                                        <h6 style={{ 'color': 'black' }}className="mt-1"> Available Size :39, 40</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1595 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--  five row GIZA shirt collection   */}
                    {/* <!-- giza shirt no 13   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt13.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Checks Cream Color
                                            Formal_36959</h6><br />
                                        <h6 style={{ 'color': 'black' }}className="mt-2"> Available Size :40</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- giaz shirt no 14   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt14.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                    </ul>
                                    <div className="card-footer  border-0  pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Plain Blue Slim Formal
                                            Giza Cotton Shirt_S38343.</h6><br /><br />
                                        <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- giza shirt no 15   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt15.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                    </ul>
                                    <div className="card-footer  border-0  pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Plain Blue Slim Formal
                                            Giza Cotton Shirt_S36939</h6><br /><br />
                                        <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39, 40</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--  six row GIZA shirt collection   */}
                    {/* <!-- giza shirt no 16   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt16.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                    </ul>
                                    <div className="card-footer  border-0  pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Plain Blue Formal Giza
                                            Cotton Shirt_38343</h6><br /><br />
                                        <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :40</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- giaz shirt no 17   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt17.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                    </ul>
                                    <div className="card-footer  border-0  pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Plain Grey Formal Giza
                                            Cotton Shirt_38351.</h6><br /><br />
                                        <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :40</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  giza shirt no 18   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt18.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                    </ul>
                                    <div className="card-footer  border-0  pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Plain Green Giza Formal
                                            Cotton Shirt_38353</h6><br /><br />
                                        <h6 style={{ 'color': 'black' }}className="mt-2"> Available Size :39</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--  seven row GIZA shirt collection  */}
                    {/* <!-- giza shirt no 19   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt19.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                    </ul>
                                    <div className="card-footer  border-0  pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Plain Bottle green Slim
                                            Formal Giza Cotton </h6><br /><br />
                                        <h6 style={{ 'color': 'black' }}className="mt-2"> Available Size :</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- giaz shirt no 20   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt20.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                    </ul>
                                    <div className="card-footer  border-0  pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Plain Blue Formal Giza
                                            Cotton Shirt_36940.</h6><br /><br />
                                        <h6 style={{ 'color': 'black' }}className="mt-2"> Available Size :40</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* giza shirt no 21   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card new_arrival border-0 shadow-lg">
                                <div className="card-body ">
                                    <img src="giza_shirt21.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> GIZA</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-5  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                    </ul>
                                    <div className="card-footer  border-0  pl-0 bg-white">
                                        <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Plain Off White Formal
                                            Giza Cotton Shirt_38346</h6><br /><br />
                                        <h6 style={{ 'color': 'black' }}className="mt-2"> Available Size :39,40</h6>
                                        <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1495</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-9 col-sm-12 mb-5">
                            <div className="input_bar2"> <span className="mt-2 ml-3 float-left shadow-lg" style={{ 'color': '#111111' }}>
                                Showing 21 of 21 results.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}