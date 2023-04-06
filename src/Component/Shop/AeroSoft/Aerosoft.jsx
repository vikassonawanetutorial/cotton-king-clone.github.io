import React from "react";

export default function Aerosoft() {
    return (
        <>
            {/* shop collection section  */}
            <section style={{ 'background-color': '#f5f5f5' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="font-weight-bold mt-4">SHOP - Collections AeroSoft</h5>
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
                            {/* <!-- aerosoft_shirt collection   */}
                            {/* <!-- aerosoft_shirt shirt no 1   */}
                            <div className="row">
                                <div className="col-lg-4 col-sm-12 mt-5 mb-5 w-100">
                                    <div className="card border-0 new_arrival shadow-lg">
                                        <div className="card-body ">
                                            <img src="aerosoft_shirt1.jpeg" alt="" width="100%" />
                                            <ul className="heart_eye">
                                                <li>
                                                    <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>
                                                        AEROSOFT</p>
                                                </li>
                                                <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i>
                                                </li>
                                                <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i>
                                                </li>
                                            </ul>
                                            <div className="card-footer  border-0  pl-0 bg-white">
                                            <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Cottonking Plain
                                                Blue color Formal Shirt_39873.</h6><br /><br />
                                            <h6 style={{ 'color': 'black' }} className="mt-2">Available Size:42</h6>
                                            <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1195 </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- aerosoft_shirt no 2   */}
                                <div className="col-lg-4 col-sm-12 mt-5 mb-5 w-100 ">
                                    <div className="card border-0 new_arrival shadow-lg">
                                        <div className="card-body ">
                                            <img src="Breathe_Easy_shirt2.jpg" alt="" width="100%" />
                                            <ul className="heart_eye">
                                                <li>
                                                    <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>
                                                        AEROSOFT</p>
                                                </li>
                                                <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i>
                                                </li>
                                                <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i>
                                                </li>
                                            </ul>
                                            <div className="card-footer  border-0  pl-0 bg-white">
                                            <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Pista Color
                                                Checks Slim Formal Shirt_S37868.</h6><br /><br />
                                            <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :</h6>
                                            <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1195</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  breathe easy shirt no-- 3   */}
                                <div className="col-lg-4 col-sm-12 mt-5 mb-5 w-100 ">
                                    <div className="card border-0 new_arrival shadow-lg">
                                        <div className="card-body ">
                                            <img src="Breathe_Easy_shirt3.jpg" alt="" width="100%" />
                                            <ul className="heart_eye">
                                                <li>
                                                    <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>
                                                        AEROSOFT</p>
                                                </li>
                                                <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i>
                                                </li>
                                                <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i>
                                                </li>
                                            </ul>
                                            <div className="card-footer  border-0  pl-0 bg-white">
                                            <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_shirt-S37937</h6><br /><br />
                                            <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :</h6>
                                            <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1195 </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- secound aerosoft collection   */}
                    {/* <!--aerosoft shirt no 4   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt4.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S37938.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1195 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 5   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt5.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_37933.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 42</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1195</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 6   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt6.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Formal Shirt_37935</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : </h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1195</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- therd aerosoft collection   */}
                    {/* <!--aerosoft shirt no 7   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt7.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S35662.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 8  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt8.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer p-0  border-0  pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_35672.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 9  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt9.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}>Slim Formal_S35663</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- fourth aerosoft collection   */}
                    {/* <!--aerosoft shirt no 10   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt10.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_35673.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39, 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 11   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt11.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}>Formal Shirt_35674.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size:39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 12 */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt12.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}>Formal Shirt_35797</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- five aerosoft collection  */}
                    {/* <!--aerosoft shirt no 13   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt13.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}>Formal Shirt_35677.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :42</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1045 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 14   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt14.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}>Slim Formal_S35562.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size:38</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 15  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt15.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S35650</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- six aerosoft collection   */}
                    {/* <!--aerosoft shirt no 16   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt16.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S35651</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 17   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt17.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Formal Shirt_35519.
                                    </h6><br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 18  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt18.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}>Slim Formal_S35555</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- seven aerosoft collection   */}
                    {/* <!--aerosoft shirt no 19   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt19.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}>Slim Formal_S35563</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 20   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt20.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_35521.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 21 */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body">
                                    <img src="aerosoft_shirt21.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_35523</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2">Available Size:39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- eight aerosoft collection   */}
                    {/* <!--aerosoft shirt no 22  */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt22.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_35537</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 23  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt23.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}>Slim Formal_S35557.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2">Available Size : 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 24  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt24.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className="ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_34117</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- nine aerosoft collection   */}
                    {/* <!--aerosoft shirt no 25   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt25.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_34131.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 26  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt26.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Formal Shirt_35535.
                                    </h6><br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 39, 42</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 27 */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0  new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt27.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_34118</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2">Available Size :40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ten aerosoft collection   */}
                    {/* <!--aerosoft shirt no 28   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt28.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_34130.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 29   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt29.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Formal Shirt_33458.
                                    </h6><br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : </h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  aerosoft_shirt no 30  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt30.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}>Formal Shirt_33456</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39, 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  eleven aerosoft collection   */}
                    {/* aerosoft shirt no 31   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt31.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S33368.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* aerosoft_shirt no 32   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt32.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S33415.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 39, 40, 42</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* aerosoft_shirt no 33  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt33.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className="ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S33417</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2">Available Size :39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- twelve aerosoft collection   */}
                    {/* <!--aerosoft shirt no 34   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt34.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_33380.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :42</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.895</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  aerosoft_shirt no 35   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt35.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_33385.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 39, 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 895</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  aerosoft_shirt no 36  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt36.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_33405</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- therteen aerosoft collection  */}
                    {/* <!--aerosoft shirt no 37   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body">
                                    <img src="aerosoft_shirt37.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_33410.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  aerosoft_shirt no 38   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt38.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_33379.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : </h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  aerosoft_shirt no 39  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt39.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': ',15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_34108</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :44</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- fourteen aerosoft collection  */}
                    {/* <!--aerosoft shirt no 40   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt40.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className="ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_33463.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : </h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 41  --> */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt41.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Formal Shirt_33462.
                                    </h6><br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 42 </h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 42 --> */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt42.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_33460</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- fifteen aerosoft collection  */}
                    {/* <!--aerosoft shirt no 43  */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt43.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S33373.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 39, 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 44  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt44.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Formal Shirt_26875.
                                    </h6><br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 40 </h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- aerosoft_shirt no 45 --> */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt45.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Slim Formal_S26875</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- sixteen aerosoft collection  --> */}
                    {/* <!--aerosoft shirt no 46  */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt46.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}>Formal Shirt_27758.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.895 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12  mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt47.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_27765.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 39 </h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.895</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* aerosoft_shirt no 48 */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="aerosoft_shirt48.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>AEROSOFT
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_27794</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 40, 42</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.895 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* free shipping section  */}
            <section style={{'background-color':'#f5f5f5'}}>
        <div class="container">
            <div class="row">
                <div class="col-12 border  mt-5 mb-5">
                    <div class="row">
                        <div class="col-lg-3 col-sm-12 text-center mt-4 mb-4 mb-4">
                            <h2 class="fas fa-truck text-center float-left ml-5 " style={{'color':'#28b293'}}></h2>
                            <h5 class=" font-weight-bold  float-left" style={{}}>Free
                                Shipping</h5>
                            
                        </div>
                        <div class="col-lg-3 col-sm-12 text-center mt-4 mb-4">
                            <h3 class="fas fa-money-bill-alt text-center float-left ml-5 " style={{'color':'#28b293'}}>
                            </h3>
                            <h5 class=" font-weight-bold  float-left" style={{}}> 100%
                                Cotton</h5>
                        </div>
                        <div class="col-lg-3 col-sm-12 text-center mt-4 mb-4">
                            <h3 class="fas fa-credit-card text-center float-left ml-5 " style={{'color':'#28b293'}}>
                            </h3>
                            <h5 class=" font-weight-bold  float-left" style={{}}> Safe
                                Payment </h5>
                        </div>
                        <div class="col-lg-3 col-sm-12 text-center mt-4 mb-4">
                            <h3 class="fas fa-store fas fa-credit-card text-center float-left ml-5 "
                                style={{'color':'#28b293'}}></h3>
                            <h5 class=" font-weight-bold  float-left" style={{}}>
                                200+Store
                                <br/> Nationwide6
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}