import React from "react";

export default function Footer(){
    return(
        <>
       {/*  footer section  */}
   
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm mb-5">
                    <img src="logocottonking.png" alt="" className="mt-5"/><br/>
                    <i className="fa fa-mail-bulk mt-4"></i>
                    <a href="">info@cottonking.com</a> <br/>
                    <p className="mt-4">Cottonking - Brand synonymous with Success, Trust, Quality and Excellence. The 3
                        pillars of the brand are 100% Cotton, Maximum Variety in Cotton and Value for Money for its
                        customers. Launched in 1996, Cottonking is a brand with a difference.</p>
                    <p className="mt-4">© Fashionking Brands Pvt. Ltd. All Rights Reserved </p>
                    <img src="facebook.webp" alt="" height="25px"/>
                    <img src="Instagram_icon.png.webp" alt="" height="25px" className="ml-2"/>
                </div>
                <div className="col-lg-2 col-sm">
                    <h5 className="mt-5 font-weight-bold">QUICK LINKS</h5>
                    <h6 className="mt-3">Home</h6>
                    <h6 className="mt-3">Shop</h6>
                    <h6 className="mt-3">Orders</h6>
                    <h6 className="mt-3">Shopping Cart</h6>
                    <h6 className="mt-3">Wishlist</h6>
                </div>
                <div className="col-lg-3 col-sm">
                    <h5 className="mt-5 font-weight-bold">PERSONALIZATION</h5>
                    <h6 className="mt-3"> Cancellation & Refund Policy</h6>
                    <h6 className="mt-3">Privacy Policy</h6>
                    <h6 className="mt-3">Returns & Exchange Policy</h6>
                    <h6 className="mt-3">Shipping & Delivery Policy</h6>
                    <h6 className="mt-3">Terms and Conditions</h6>
                    <h6 className="mt-3">Contact Us</h6>
                    <h6 className="mt-3">Store Locator</h6>
                    <h6 className="mt-3">Ships to US & UK</h6>
                </div>
                <div className="col-lg-3 col-sm">
                    <h6 className="mt-5 font-weight-bold">INSTAGRAM FEED</h6>
                    <br/><br/>
                    <h6 className="mt-5 font-weight-bold">PAY SECURELY BY</h6>
                </div>
            </div>
        </div>
     {/* footer name section  */}
    <div className="container-fluid p-3" style={{'background-color':'black'}}>
        <div className="row">
            <div className="col-lg-12 col-sm-12 ">
                <ul className="align-item-center text-center" style={{'listStyleType':'none'}}>
            <li><h6 className="font-weight-bold text-white float-left">DESIGNED BY<b className="text-danger">  ♥ </b>
                        </h6></li>
                    <li><h6 className=" float-left " style={{ 'color': 'yellow'}}>
                        VIKAS SONAWANE</h6></li>
                        </ul>
            </div>
        </div>
    </div>
        </>
    )
}