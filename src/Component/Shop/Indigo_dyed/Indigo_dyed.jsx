import React from "react";

export default function Indigo_dyed() {
    return (
        <>
            <section style={{ 'background-color': '#f5f5f5' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="font-weight-bold mt-4">SHOP - Collections - Indigo Dyed</h5>
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
                            {/* <!-- Indigo Dyed shirt collection  */}
                            {/* <!-- Indigo Dyedshirt no 1   */}
                            <div className="row">
                                <div className="col-lg-4 col-sm-12 mt-5 mb-5 w-100">
                                    <div className="card new_arrival border-0 shadow-lg">
                                        <div className="card-body ">
                                            <img src="indigo_dyed_shirt1.jpeg" alt="" width="100%" />
                                            <ul className="heart_eye">
                                                <li>
                                                    <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>
                                                        INDIGO DYED</p>
                                                </li>
                                                <li><i className="fa-solid fa-heart float-left ml-3  mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                                <li><i className="fa-solid fa-eye float-left  ml-2 mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                            </ul>
                                            <div className="card-footer  border-0  pl-0 bg-white">
                                            <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Blue Checks Slim
                                                Formal.</h6><br /><br />
                                            <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 42</h6>
                                            <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  Indigo Dyed shirt no 2   */}
                                <div className="col-lg-4 col-sm-12 mt-5 mb-5 w-100">
                                    <div className="card border-0 new_arrival shadow-lg">
                                        <div className="card-body ">
                                            <img src="indigo_dyed_shirt2.jpeg" alt="" width="100%" />
                                            <ul className="heart_eye">
                                                <li>
                                                    <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>
                                                        INDIGO DYED</p>
                                                </li>
                                                <li><i className="fa-solid fa-heart float-left ml-3  mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                                <li><i className="fa-solid fa-eye float-left ml-2 mt-3" style={{ 'color': '#28b293' }}></i>
                                                </li>
                                            </ul>
                                            <div className="card-footer  border-0  pl-0 bg-white">
                                            <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Maroon Blue
                                                Checks.</h6><br /><br />
                                            <h6 style={{ 'color': 'black' }} className="mt-2">Available Size :39, 40, 42</h6>
                                            <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- anti stain shirt no-- 3   */}
                                <div className="col-lg-4 col-sm-12 mt-5 mb-5 w-100">
                                    <div className="card border-0 new_arrival shadow-lg">
                                        <div className="card-body ">
                                            <img src="indigo_dyed_shirt3.jpeg" alt="" width="100%" />
                                            <ul className="heart_eye">
                                                <li>
                                                    <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>
                                                        INDIGO DYED</p>
                                                </li>
                                                <li><i className="fa-solid fa-heart float-left ml-3  mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                                <li><i className="fa-solid fa-eye float-left  ml-2 mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                            </ul>
                                            <div className="card-footer  border-0  pl-0 bg-white">
                                            <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim
                                                Formal_S37838</h6><br /><br />
                                            <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39, 40</h6>
                                            <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045 </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- secound row indigo_dyed collection  */}
                    {/* <!-- indigo_dyed shirt no 4   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt4.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S38083.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39, 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* indigo_dyed shirt no 5  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt5.jpeg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S38094.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39, 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1195</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  indigo_dyed  shirt no 6   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt6.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Slim Formal_S38095</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1195 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- third row indigo_dyed collection   */}
                    {/* <!-- indigo_dyed shirt no 7   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt7.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Semi Formal_36071.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39, 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  indigo_dyed shirt no 8   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt8.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Semi Formal_36076.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39, 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  indigo_dyed  shirt no 9   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt9.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Semi Formal_36065</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 39, 40, 42</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- fourth row indigo_dyed collection   */}
                    {/* <!-- indigo_dyed shirt no 10   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt10.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S36087.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39, 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  indigo_dyed shirt no 11   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt11.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S36069.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39, 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  indigo_dyed  shirt no 12  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt12.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S36083</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* five row indigo_dyed collection  */}
                    {/*  indigo_dyed shirt no 13   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt13.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S36089.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39, 40, 42</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  indigo_dyed shirt no 14  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt14.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Slim Formal_S36088.
                                    </h6><br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 42</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* < indigo_dyed  shirt no 15  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt15.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Semi Formal_36080</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 39, 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  six row indigo_dyed collection   */}
                    {/* indigo_dyed shirt no 16   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt16.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Semi Formal_36583.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :40, 42</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* indigo_dyed shirt no 17  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt17.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Semi Formal_20497.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 39, 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* indigo_dyed  shirt no 18   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="indigo_dyed_shirt18.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>INDIGO DYED
                                            </p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-3  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim Formal_S20525</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size : 39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.995</h3>
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