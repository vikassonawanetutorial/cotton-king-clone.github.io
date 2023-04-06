import React from "react";

export default function Contact_us() {
    return (
        <>
            {/*  contact section   */}
            <section style={{ 'background-color': '#f5f5f5' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="mt-5 font-weight-bold">CONTACT US</h3>
                        </div>
                    </div>

                    <div className="row">
                        {/* contact list form    */}
                        <div className="col-lg-4 col-sm">
                            <form action="">
                                <label for="" className="mt-4 font-weight-bold">FULL NAME</label><br />
                                <input type="text " placeholder="Please Enter Your Name"
                                    className="border-0 mt-2 w-100 ml-2 table-striped " style={{ 'background-color': '#f5f5f5' }} />
                                <hr />
                                <label for="" className="mt-2 font-weight-bold">EMAIL</label><br />
                                <input type="text " placeholder="Enter Email Here..."
                                    className="border-0 mt-2 w-100 ml-2 table-striped " style={{ 'background-color': '#f5f5f5' }} />
                                <hr />
                                <label for="" className="mt-2 font-weight-bold">Message</label><br/>
                                    <input type="text " placeholder="Write Your Message Here..."
                                        className="border-0 w-100 mt-2 ml-2 table-striped " style={{ 'background-color': '#f5f5f5' }} />
                                    <hr />
                                    <button style={{ 'background-color': '#28b293' }}
                                        className="border-0 btn-lg text-white font-weight-bold w-50 mt-3">SUBMIT <i
                                            className="fa fa-location-arrow"></i></button>
                            </form>
                        </div>
                    {/* map   */}
                    <div className="col-lg-5 col-sm  p-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3867250.9286021274!2d76.77476745!3d18.815426549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1672300351523!5m2!1sen!2sin"
                            width="475" height="400" style={{ 'border': '0' }} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade" className="mb-5 "></iframe>
                    </div>
                    {/* contact number email address  */}
                    <div className="col-lg-3 col-sm">
                        <i className="fa fa-mobile float-left ml-3 " style={{ 'font-size': '30px', 'color': '#28b293' }}></i>
                        <h6 className="ml-5  font-weight-bold">+91 9209010005</h6><br />
                        <i className="fa fa-location-pin mt-4 float-left ml-3 " style={{ 'font-size': '30px', 'color': '#28b293' }}></i>
                        <h6 className="ml-5 font-weight-bold mt-4">Cottonking Ecommerce</h6><br />
                        <i className="fa fa-message mt-4 float-left ml-3 " style={{ 'font-size': '30px', 'color': '#28b293' }}></i>
                        <h6 className=" font-weight-bold mt-4 ml-2 float-left">info@cottonking.com</h6><br /><br /><br /><br />
                        <i className="fa fa-phone float-left ml-3 " style={{ 'font-size': '30px', 'color': '#28b293' }}></i>
                        <h6 className=" ml-2 font-weight-bold float-left" style={{ 'margin-left': '0px' }}>+91 9209010005</h6><br />
                    </div>
                    </div>


                </div>

            </section>


               {/* free shoping section   */}
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