import React from "react";

export default function Breathe_easy() {
    return (
        <>
            {/* shop collection section  */}
            <section style={{ 'background-color': '#f5f5f5' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="font-weight-bold mt-4">SHOP - Collections = Breathe Easy</h5>
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
                                <li class="dropdown w-100" style={{ 'list-style-type': 'none' }}>
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
                            {/* breathe_easy shirt collection  */}
                            {/* breathe_easy shirt no 1  */}
                            <div className="row">
                                <div className="col-lg-4 col-sm-12 mt-5 mb-5 w-100">
                                    <div className="card new_arrival border-0 shadow-lg">
                                        <div className="card-body">
                                            <img src="Breathe_Easy_shirt1.jpg" alt="" width="100%" />
                                            <ul className="heart_eye">
                                                <li>
                                                    <p className="ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>
                                                        BREATHE EASY</p>
                                                </li>
                                                <li><i className="fa-solid fa-heart float-left ml-4 mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                                <li><i className="fa-solid fa-eye float-left  ml-2 mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                            </ul>
                                            <div className="card-footer  border-0  pl-0 bg-white">
                                                <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Slim
                                                    Formal_S33606.</h6><br /><br />
                                                <h6 style={{ 'color': 'black' }} className="mt-2">Available Size:39</h6>
                                                <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1045</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* breathe_easy shirt no 2   */}
                                <div className="col-lg-4 col-sm-12 mt-5 mb-5 w-100 ">
                                    <div className="card border-0 new_arrival shadow-lg">
                                        <div className="card-body ">
                                            <img src="Breathe_Easy_shirt2.jpg" alt="" width="100%" />
                                            <ul className="heart_eye">
                                                <li>
                                                    <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>
                                                        BREATHE EASY</p>
                                                </li>
                                                <li><i className="fa-solid fa-heart float-left ml-4  mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                                <li><i className="fa-solid fa-eye float-left  ml-2 mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                            </ul>
                                            <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Formal
                                                Shirt_33591.</h6><br /><br /><br />
                                            <h6 style={{ 'color': 'black' }}>Available Size :39, 40, 42</h6>
                                            <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045 </h3>
                                        </div>
                                    </div>
                                </div>
                                {/* breathe easy shirt no-- 3   */}
                                <div className="col-lg-4 col-sm-12 mt-5 mb-5 w-100 ">
                                    <div className="card border-0 new_arrival shadow-lg">
                                        <div className="card-body ">
                                            <img src="Breathe_Easy_shirt3.jpg" alt="" width="100%" />
                                            <ul className="heart_eye">
                                                <li>
                                                    <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>
                                                        BREATHE EASY</p>
                                                </li>
                                                <li><i className="fa-solid fa-heart float-left ml-4  mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                                <li><i className="fa-solid fa-eye float-left  ml-2 mt-3"
                                                    style={{ 'color': '#28b293' }}></i></li>
                                            </ul>
                                            <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Slim
                                                Formal_S33610</h6><br /><br /><br />
                                            <h6 style={{ 'color': 'black' }}> Available Size :39</h6>
                                            <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045 </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* secound row Breathe_Easy_shirt collection  */}
                    {/*  Breathe_Easy_shirt no 4 */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="Breathe_Easy_shirt4.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>BREATHE
                                                EASY</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0  pl-0 p-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}>Slim Formal_S33637....</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1045 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Breathe_Easy_shirt no 5 */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="Breathe_Easy_shirt5.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> BREATHE
                                                EASY</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer mb-0 border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Slim Formal_S33866.....
                                    </h6><br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Breathe_Easy_shirt no 6   */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="Breathe_Easy_shirt6.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>BREATHE
                                                EASY</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}> Slim Formal_S33624</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size:39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  therd row Breathe_Easy_shirt collection   */}
                    {/*  Breathe_Easy_shirt no 7   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body">
                                    <img src="Breathe_Easy_shirt7.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>BREATHE
                                                EASY</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_33621.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39, 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Breathe_Easy_shirt no 8  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="Breathe_Easy_shirt8.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>BREATHE
                                                EASY</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Formal Shirt_37756.
                                    </h6><br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size :39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Breathe_Easy_shirt no 9  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="Breathe_Easy_shirt9.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> BREATHE
                                                EASY</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li> <br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}> Formal Shirt_33595</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2"> Available Size:40, 42</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  fourth row Breathe_Easy_shirt collection  */}
                    {/* Breathe_Easy_shirt no 10  */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="Breathe_easy_shirt10.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>BREATHE
                                                EASY</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_33665.</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2">Available Size :39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Breathe_Easy_shirt no 11  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="Breathe_easy_shirt11.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> BREATHE
                                                EASY</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_33619.</h6><br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2">Available Size : 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Breathe_Easy_shirt no 12  */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="Breathe_easy_shirt12.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> BREATHE
                                                EASY</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold " style={{ 'font-size': '16px' }}>Formal Shirt_33549</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2">Available Size :40, 42</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹.1045 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  five row Breathe_Easy_shirt collection   */}
                    {/*  Breathe_Easy_shirt no 13   */}
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="Breathe_easy_shirt13.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>BREATHE
                                                EASY</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0  pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}>Slim Formal_S33628.</h6>
                                    <br /><br />
                                    <h6 style={{ 'color': 'black' }} className="">Available Size :39</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045 </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Breathe_Easy_shirt no 14 */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="Breathe_easy_shirt14.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}>BREATHE
                                                EASY</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4  mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}> Formal Shirt_33596.
                                    </h6><br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2">Available Size :39, 40</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Breathe_Easy_shirt no 15 */}
                        <div className="col-lg-3 col-sm-12 mt-2 mb-5 w-100 ">
                            <div className="card border-0 new_arrival shadow-lg">
                                <div className="card-body ">
                                    <img src="Breathe_easy_shirt15.jpg" alt="" width="100%" />
                                    <ul className="heart_eye">
                                        <li>
                                            <p className=" ml-5 mt-3" style={{ 'color': 'gray', 'float': 'left', 'font-size': '15px' }}> BREATHE
                                                EASY</p>
                                        </li>
                                        <li><i className="fa-solid fa-heart float-left ml-4 mt-3" style={{ 'color': '#28b293' }}></i></li>
                                        <li><i className="fa-solid fa-eye float-left  ml-2 mt-3" style={{ 'color': '#28b293' }}></i></li><br /><br />
                                    </ul>
                                    <div className="card-footer  border-0 p-0 pl-0 bg-white">
                                    <h6 className="float-left font-weight-bold" style={{ 'font-size': '16px' }}>Formal Shirt_33551</h6>
                                    <br />
                                    <h6 style={{ 'color': 'black' }} className="mt-2">Available Size :42</h6>
                                    <h3 style={{ 'color': '#28b293' }} className="font-weight-bold mt-2">₹. 1045 </h3>
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