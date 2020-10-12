import React from 'react';

class Home extends React.Component {
    render() {

        return (
            <body className="main-layout">
                {/* <!-- loader  --> */}
                {/* <div className="loader_bg">
                    <div className="loader"><img src="images/loading.gif" alt="#" /></div>
                </div> */}
                {/* <!-- end loader --> */}

                {/* <!-- header --> */}
                <header>
                    {/* <!-- header inner --> */}
                    <div className="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                    <div className="full">
                                        <div className="center-desk">
                                            <div className="logo"> <a href="index.html"><img src="images/logo.jpg" alt="#" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                    <div className="menu-area">
                                        <div className="limit-box">
                                            <nav className="main-menu">
                                                <ul className="menu-area-main">
                                                    <li className="active"> <a href="index.html">Home</a> </li>
                                                    <li> <a href="aboutus.html">About us</a> </li>
                                                    <li> <a href="meet.html"> Meet me</a> </li>
                                                    <li> <a href="whatwedo.html"> What we do</a> </li>
                                                    <li> <a href="contact.html">Contact us</a> </li>
                                                    <li> <a href="contact.html">Login </a> </li>
                                                    <li className="mean-last"> <a href="#"><img src="images/search_icon.png" alt="#" /></a> </li>
                                                    <li className="mean-last"> <a href="#"><img src="images/top-icon.png" alt="#" /></a> </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end header inner --> */}
                </header>

                <section>
                    <div id="myCarousel" className="carousel slide banner-main" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="first-slide" src="images/banner.jpg" alt="First slide" />
                                <div class="container">
                                    <div class="carousel-caption relative">
                                        <h1>Hello <br /><strong class="cur">I Am Jashika Jonson</strong></h1>
                                        <span>And I can help you lose weight fast and safety</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br />has been the industry's standard dummy text ever since the 1500s, when an unknown<br /> printer took a galley</p>
                                        <div class="button_section">
                                            <a class="main_bt" href="#">Contact us</a>
                                            <a class="main_bt" href="#">Click Here</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="second-slide" src="images/banner.jpg" alt="Second slide" />
                            <div class="container">
                                <div class="carousel-caption relative">
                                    <h1>Hello <br /><strong class="cur">I Am Jashika Jonson</strong></h1>
                                    <span>And I can help you lose weight fast and safety</span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br />has been the industry's standard dummy text ever since the 1500s, when an unknown<br /> printer took a galley</p>
                                    <div class="button_section"> <a class="main_bt" href="#">Contact us</a> <a class="main_bt" href="#">Click Here</a> </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>

                {/* <!-- footer --> */}
    <footer>
    <div class="footer">
    <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="JJcoach">
                            <h3>Health <strong class="coa"> </strong></h3>
                        </div>

                    </div>


                </div>

    </div>
    
    </div>
    </footer>
    
            </body>
        );
    }
}
export default Home;