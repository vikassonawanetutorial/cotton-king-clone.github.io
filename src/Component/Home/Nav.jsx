import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 navbar1">
                        <div className="row">
                            <div className="col-lg-4 d-md-block d-none nav_list_iteam mt-2 text-white font-weight-bold ">
                                <ul>
                                    <li><i className="fa-solid fa-location-pin"></i></li>
                                    <li>Store Locator</li>
                                    <li><i className="fa-solid fa-phone ml-4"></i></li>
                                    <li>+91 9209010005 </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-sm">
                                <h4 className="text-white text-center font-weight-bold mt-2">Welcome to Cottonking Store</h4>
                            </div>
                            <div className="col-4 d-md-block d-none nav_login text-white mt-2 font-weight-bold ">
                                <ul>
                                    <li><i className="fa-solid fa-lock" style={{ 'margin-left': '250px' }}></i></li>
                                    <li> Login/Register </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cottonking logo and search bar sections  */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 mt-3 float-left text-center pl-5 pr-0">
                        <img src="https://d1yluyhql7qeci.cloudfront.net/ckecom/images/media/store/2020/07/TenK624804.jpg" alt="" className="float-left" style={{ 'position': 'sticky', 'top': '0' }} />
                    </div>
                    <div className="col-lg-5 col-sm-12 mt-3 text-center">
                        <input type="text" className="form-control   float-left p-4"
                            aria-label="Dollar amount (with dot and two decimal places)" placeholder="Search Products..."
                            style={{ 'width': '400px' }} />
                        <span className="input-group-text  float-left "
                            style={{ 'width': '35px', 'background-color': '#28b293', 'height': '50px' }}><i
                                className="fa-sharp fa-solid fa-magnifying-glass text-white font-weight-bold"></i></span>
                    </div>
                    <div className="col-lg-3 d-md-block d-none mt-3">
                        <i className="fa-regular fa-heart h1 "></i>
                        <i className="fa-solid fa-bag-shopping ml-3 " style={{ 'font-size': '35px' }}></i>
                        <span className="ml-3 font-weight-bold mt-2">CART Items</span>
                    </div>
                </div>
            </div>
            {/* home shooping contact section  */}
            <div className="container">
                <div className="row">
                    <div className="col-12 home mt-4 font-weight-bold">
                        <ul>
                            <li><i className="fa-solid fa-house house"></i></li>
                            <NavLink to="/Index" className="text-dark">
                                <li className="ml-5 text-dark">HOME</li>
                            </NavLink>
                            <li className="dropdown w-100">
                                <button className="btn font-weight-bold ml-3 dropdown-toggle " type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SHOP
                                </button>
                                <div className="dropdown-menu" style={{'width':'500px',minWidth:"300px"  }}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                            <div className="col-lg-4 col-sm-12   ">
                                            {/* collection section */}
                                            <NavLink className="dropdown-item font-weight-bold text-warning" to="/">Collection</NavLink>
                                            <NavLink className="dropdown-item" to="Anti_stain">Anti-Stain</NavLink>
                                            <NavLink className="dropdown-item" to="Breathe_easy">Breathe Easy</NavLink>
                                            <NavLink className="dropdown-item" to="Aerosoft">AeroSoft</NavLink>
                                            <NavLink className="dropdown-item" to="Giza">GIZA</NavLink>
                                            <NavLink className="dropdown-item" to="Indigo_dyed">Indigo Dyed</NavLink>
                                            <NavLink className="dropdown-item" to="Micro_dobby">Micro Dobby</NavLink>
                                        </div>
                                        {/* shirt section */}
                                        <div className="col-lg-4 col-sm-12    ">
                                            <NavLink className="dropdown-item  font-weight-bold text-warning " to="/">SHIRT</NavLink>
                                            <NavLink className="dropdown-item" to="Formal_shirt">Formal Shirt</NavLink>
                                            <NavLink className="dropdown-item" to="Slim_formal">Slim Formal</NavLink>
                                            <NavLink className="dropdown-item" to="/">Semi Formal</NavLink>
                                        </div>
                                        {/* T-shirt section   */}
                                        <div className="col-lg-4 col-sm-12    ">
                                            <NavLink className="dropdown-item font-weight-bold text-warning " to="/">T-Shirt</NavLink>
                                            <NavLink className="dropdown-item" to="/">Bottom Wear</NavLink>
                                            <NavLink className="dropdown-item" to="/">Jeans</NavLink>
                                            <NavLink className="dropdown-item" to="/">Trouser</NavLink>
                                            <NavLink className="dropdown-item" to="/">New Arival</NavLink>
                                        </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </li>
                            {/* contact us form button */}
                            <li className="ml-"><NavLink to="Contact_us" style={{ 'color': 'black' }}>CONTACT US</NavLink> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}