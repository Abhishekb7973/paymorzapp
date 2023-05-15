// CSS
import "./frontend/homeAssets/css/bootstrap.min.css";
import "./frontend/homeAssets/css/fontAwesome.min.css";
import "./frontend/homeAssets/css/lineIcons.min.css";
import "./frontend/homeAssets/css/owlCarousel.min.css";
import "./frontend/homeAssets/css/animate.min.css";
import "./frontend/homeAssets/css/style.css";
// Imgs
import LogoNoBG from "./frontend/homeAssets/img/logo-no-bg.png";
import HeroIMG2 from "./frontend/homeAssets/img/hero-img2.png";
import Client1 from "./frontend/homeAssets/img/clients/01.png";
import Client2 from "./frontend/homeAssets/img/clients/02.png";
import Client3 from "./frontend/homeAssets/img/clients/03.png";
import Client4 from "./frontend/homeAssets/img/clients/04.png";
import Client5 from "./frontend/homeAssets/img/clients/05.png";
import Icon1 from "./frontend/homeAssets/img/icons/1.png";
import Icon2 from "./frontend/homeAssets/img/icons/2.png";
import Icon3 from "./frontend/homeAssets/img/icons/3.png";
import Icon4 from "./frontend/homeAssets/img/icons/4.png";
import Icon5 from "./frontend/homeAssets/img/icons/5.png";
import Icon6 from "./frontend/homeAssets/img/icons/6.png";
import Icon7 from "./frontend/homeAssets/img/icons/7.png";
import Icon8 from "./frontend/homeAssets/img/icons/8.png";
import Icon9 from "./frontend/homeAssets/img/icons/9.png";
import Icon10 from "./frontend/homeAssets/img/icons/10.png";
import Icon11 from "./frontend/homeAssets/img/icons/11.png";
import Icon22 from "./frontend/homeAssets/img/icons/22.png";
import Icon33 from "./frontend/homeAssets/img/icons/33.png";
import Icon44 from "./frontend/homeAssets/img/icons/44.png";
import HowItWorksBG from "./frontend/homeAssets/img/fun-fact-bg.jpg";
import Testimonial1 from "./frontend/homeAssets/img/comment-01.jpg";
import Testimonial2 from "./frontend/homeAssets/img/testimonial2.jpg";
import Testimonial3 from "./frontend/homeAssets/img/testimonial3.jpg";
import SecureImg from "./frontend/homeAssets/img/secure.png";
// JS
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      {/* Start Preloader */}
      {/* <div id="preloader">
        <div className="t-circle">
          <div className="t-circle1 t-child" />
          <div className="t-circle2 t-child" />
          <div className="t-circle3 t-child" />
          <div className="t-circle4 t-child" />
          <div className="t-circle5 t-child" />
          <div className="t-circle6 t-child" />
          <div className="t-circle7 t-child" />
          <div className="t-circle8 t-child" />
          <div className="t-circle9 t-child" />
          <div className="t-circle10 t-child" />
          <div className="t-circle11 t-child" />
          <div className="t-circle12 t-child" />
        </div>
      </div> */}
      {/* End Preloader */}
      {/* Start Site Header */}
      <div className="height80" />
      <header className="site-header">
        <div className="header-wrap style2">
          <div className="container">
            <div className="header-in">
              <div className="site-branding">
                {/* For Image Logo */}
                <a href="index.html" className="custom-logo-link">
                  <img src={LogoNoBG} alt="Image" className="custom-logo" />
                </a>
                {/* For Site Title */}
              </div>
              <nav className="primary-nav">
                <div className="m-menu-btn" id="m-menu-btn">
                  <span />
                </div>
                <ul className="primary-nav-list" id="primary-nav-list">
                  <li className="menu-item">
                    <a href="#">How Pay Morz Work</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Payment Types</a>
                  </li>
                  <li className="menu-item">
                    <a href="./dashboard/signin.html">Login</a>
                  </li>
                  <li className="menu-item">
                    <a href="./dashboard/signup.html">Register</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* .header-wrap */}
        </div>
      </header>
      {/* End Site Header */}
      <div className="main-content">
        {/* Start Hero Section */}
        <section className="hero creative-hero1" id="home">
          <div className="container">
            <div className="hero-text black-color">
              <h1>
                Step-up your
                <br />
                Payment game
              </h1>
              <h4>
                Lorem Ipsum is simply dummy text of.
                <br />
                the printing and typesetting industry Lorem Ipsum is simply
                dummy.
              </h4>
            </div>
          </div>
          <div className="hero-animation1">
            <div className="shap1" />
            <div className="shap2" />
            <div className="shap3" />
            <div className="shap4" />
            <div className="shap5" />
            <div className="shap6" />
          </div>
          <div className="hero-c-img">
            <img src={HeroIMG2} alt="Image" />
          </div>
        </section>
        {/* End Hero Section */}
        {/* Start Our Partners */}
        <div className="partner-logo-wrap">
          <div className="container">
            <div className="owl-carousel partner-logo" id="partner-logo">
              <a href="#">
                <img src={Client1} alt="Image" />
              </a>
              <a href="#">
                <img src={Client2} alt="Image" />
              </a>
              <a href="#">
                <img src={Client3} alt="Image" />
              </a>
              <a href="#">
                <img src={Client4} alt="Image" />
              </a>
              <a href="#">
                <img src={Client5} alt="Image" />
              </a>
              <a href="#">
                <img src={Client1} alt="Image" />
              </a>
              <a href="#">
                <img src={Client2} alt="Image" />
              </a>
              <a href="#">
                <img src={Client3} alt="Image" />
              </a>
              <a href="#">
                <img src={Client4} alt="Image" />
              </a>
              <a href="#">
                <img src={Client5} alt="Image" />
              </a>
            </div>
            {/* .partner-logo */}
          </div>
        </div>
        {/* End Our Partners */}
        <hr />
        {/* Start Service Sectinn */}
        <section className="service section service-v1" id="services">
          <div className="container">
            <div className="section-header type1">
              <h2>Services We Provide</h2>
              <div className="section-divider">
                <span />
              </div>
              <div className="sub-heading">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br />
                Lorem Ipsum has been the industry's standard
              </div>
            </div>
            <div className="row flex">
              <div className="col-lg-3 text-center">
                <div className="singel-service style1">
                  <div className="single-feature-icon2">
                    <img
                      src={Icon1}
                      className="img-fluid"
                      style={{ width: 50, height: 50 }}
                      alt="Icon not found!"
                    />
                  </div>
                  <h3 className="service-header">
                    <a href="#">Lawyer Fee</a>
                  </h3>
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-3 text-center">
                <div className="singel-service style1">
                  <div className="single-feature-icon2">
                    <img
                      src={Icon2}
                      className="img-fluid"
                      style={{ width: 50, height: 50 }}
                      alt="Icon not found!"
                    />
                  </div>
                  <h3 className="service-header">
                    <a href="#">Consultation Fee</a>
                  </h3>
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-3 text-center">
                <div className="singel-service style1">
                  <div className="single-feature-icon2">
                    <img
                      src={Icon3}
                      className="img-fluid"
                      style={{ width: 50, height: 50 }}
                      alt="Icon not found!"
                    />
                  </div>
                  <h3 className="service-header">
                    <a href="#">Vendors</a>
                  </h3>
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-3 text-center">
                <div className="singel-service style1">
                  <div className="single-feature-icon2">
                    <img
                      src={Icon4}
                      className="img-fluid"
                      style={{ width: 50, height: 50 }}
                      alt="Icon not found!"
                    />
                  </div>
                  <h3 className="service-header">
                    <a href="#">Rent/Lease</a>
                  </h3>
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-3 text-center">
                <div className="singel-service style1">
                  <div className="single-feature-icon2">
                    <img
                      src={Icon5}
                      className="img-fluid"
                      style={{ width: 50, height: 50 }}
                      alt="Icon not found!"
                    />
                  </div>
                  <h3 className="service-header">
                    <a href="#">Donations</a>
                  </h3>
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-3 text-center">
                <div className="singel-service style1">
                  <div className="single-feature-icon2">
                    <img
                      src={Icon6}
                      className="img-fluid"
                      style={{ width: 50, height: 50 }}
                      alt="Icon not found!"
                    />
                  </div>
                  <h3 className="service-header">
                    <a href="#">Freelancing Payments</a>
                  </h3>
                </div>
              </div>
              {/* .col */}
              {/* .col */}
              <div className="col-lg-3 text-center">
                <div className="singel-service style1">
                  <div className="single-feature-icon2">
                    <img
                      src={Icon7}
                      className="img-fluid"
                      style={{ width: 50, height: 50 }}
                      alt="Icon not found!"
                    />
                  </div>
                  <h3 className="service-header">
                    <a href="#">Home Supplies</a>
                  </h3>
                </div>
              </div>
              {/* .col */}
              {/* .col */}
              <div className="col-lg-3 text-center">
                <div className="singel-service style1">
                  <div className="single-feature-icon2">
                    <img
                      src={Icon8}
                      className="img-fluid"
                      style={{ width: 50, height: 50 }}
                      alt="Icon not found!"
                    />
                  </div>
                  <h3 className="service-header">
                    <a href="#">Tution Fees</a>
                  </h3>
                </div>
              </div>
              {/* .col */}
              {/* .col */}
              <div className="col-lg-3 text-center">
                <div className="singel-service style1">
                  <div className="single-feature-icon2">
                    <img
                      src={Icon9}
                      className="img-fluid"
                      style={{ width: 50, height: 50 }}
                      alt="Icon not found!"
                    />
                  </div>
                  <h3 className="service-header">
                    <a href="#">Taxes</a>
                  </h3>
                </div>
              </div>
              {/* .col */}
              {/* .col */}
              <div className="col-lg-3 text-center">
                <div className="singel-service style1">
                  <div className="single-feature-icon2">
                    <img
                      src={Icon10}
                      className="img-fluid"
                      style={{ width: 50, height: 50 }}
                      alt="Icon not found!"
                    />
                  </div>
                  <h3 className="service-header">
                    <a href="#">Contractors</a>
                  </h3>
                </div>
              </div>
              {/* .col */}
            </div>
          </div>
        </section>
        {/* End Service Sectinn */}
        {/* Start fun-factor */}
        <section
          className="fun-factor section bg-img lazy"
          data-src={HowItWorksBG}
        >
          <div className="container">
            <div
              className="section-header type1"
              style={{ position: "relative" }}
            >
              <h2 style={{ color: "#ffffff" }}>How Pay Morz Works</h2>
              <div className="section-divider">
                <span />
              </div>
            </div>
            <div className="row flex">
              <div className="col-md-3">
                <div className="single-factor">
                  <h2 className="factor-number">1. Sign Up</h2>
                  <img
                    src={Icon11}
                    className="mt-4 img-fluid"
                    style={{ width: 80, height: 80 }}
                    alt="Icon not found!"
                  />
                  <h3 className="factor-header mt-3">
                    Set up an account with your Email or Mobile
                  </h3>
                </div>
              </div>
              {/* .col */}
              <div className="col-md-3">
                <div className="single-factor">
                  <h2 className="factor-number">2. Add Beneficiary</h2>
                  <img
                    src={Icon22}
                    className="mt-4 img-fluid"
                    style={{ width: 80, height: 80 }}
                    alt="Icon not found!"
                  />
                  <h3 className="factor-header mt-3">
                    Add Biller / Landlord bank details
                  </h3>
                </div>
              </div>
              {/* .col */}
              <div className="col-md-3">
                <div className="single-factor">
                  <h2 className="factor-number">3. Pay &amp; Save</h2>
                  <img
                    src={Icon33}
                    className="mt-4 img-fluid"
                    style={{ width: 80, height: 80 }}
                    alt="Icon not found!"
                  />
                  <h3 className="factor-header mt-3">
                    Pay your expenses on card and earn miles and rewards
                  </h3>
                </div>
              </div>
              {/* .col */}
              {/* .col */}
              <div className="col-md-3">
                <div className="single-factor">
                  <h2 className="factor-number">4. Amount Credited</h2>
                  <img
                    src={Icon44}
                    className="mt-4 img-fluid"
                    style={{ width: 80, height: 80 }}
                    alt="Icon not found!"
                  />
                  <h3 className="factor-header mt-3">
                    Your Beneficiary gets money within 3 working days. No
                    deductions
                  </h3>
                </div>
              </div>
              {/* .col */}
            </div>
          </div>
        </section>
        {/* End fun-factor */}
        <hr />
        {/* Start Testimonial */}
        <section className="testimonial-wrap section" id="testimonial">
          <div className="container">
            <div className="section-header type1">
              <h2>What Client Say?</h2>
              <div className="section-divider">
                <span />
              </div>
              <div className="sub-heading">
                People love our work and they always be with us as a family,
                some of client
                <br />
                reviews is given below please see and asume our service.
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial">
                  <div className="testimonial-text">
                    "biboo is one of the very best I have had the pleasure to
                    work with in my 27 years of design and construction project
                    management here at Dover Air Force Base and I look forward
                    to working with Bancroft again on future construction."
                  </div>
                  <div className="testimonial-meta">
                    <div className="avator">
                      <img src={Testimonial1} alt="Image" />
                    </div>
                    <div className="testimonial-meta-text">
                      <h3>Jhon Doe</h3>
                      <span>Manager</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-4">
                <div className="testimonial">
                  <div className="testimonial-text">
                    "I would like to extend my personal gratitude and
                    congratulations to you and the entire biboo Construction
                    project team for their dedication and professional approach
                    and hard work in the completion of my Largest project."
                  </div>
                  <div className="testimonial-meta">
                    <div className="avator">
                      <img src={Testimonial2} alt="Image" />
                    </div>
                    <div className="testimonial-meta-text">
                      <h3>Dana M. Porter</h3>
                      <span>Director</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-4">
                <div className="testimonial">
                  <div className="testimonial-text">
                    "This state of the art facility will provide our dedicated
                    staff and volunteers with the ability to better serve
                    thousands of homeless cats and dogs for years to come. All
                    of us at DHA appreciate the outstanding service of biboo."
                  </div>
                  <div className="testimonial-meta">
                    <div className="avator">
                      <img src={Testimonial3} alt="Image" />
                    </div>
                    <div className="testimonial-meta-text">
                      <h3>Robert Smith</h3>
                      <span>Executive</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* .col */}
            </div>
          </div>
        </section>
        {/* End Testimonial */}
        <hr />
        {/* Start Contact Section */}
        <section className="contact section" id="contact">
          <div className="container">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-xl-6">
                <div className="contact-info-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-contact-info">
                        <i className="icon-basic_geolocalize-01" />
                        <div className="single-info-details">
                          <h3>100% Secure transactions</h3>
                          <span>with PCI compliant payment gateway.</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-contact-info">
                        <i className="icon-device_iphone" />
                        <div className="single-info-details">
                          <h3>We respect privacy</h3>
                          <span>No spamming. We promise</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-contact-info">
                        <i className="icon-mail_envelope" />
                        <div className="single-info-details">
                          <h3>We accept major credit cards</h3>
                          <span>with PCI compliant payment gateway.</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-contact-info">
                        <i className="icon-support_tools" />
                        <div className="single-info-details">
                          <h3>Our Support</h3>
                          <span>support@gmail.com</span>
                          <span>example@gmail.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* .contact-info-wrap */}
              </div>
              {/* .col */}
              <div className="col-xl-6">
                <img src={SecureImg} alt="Image" />
              </div>
              {/* .col */}
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </div>
      {/* Start Footer Scetion */}
      <footer className="site-footer sticky-footer">
        <div className="site-footer-in">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="footer-widget">
                  <h2 className="footer-widget-title">About</h2>
                  <a href="index.html" className="custom-logo-link">
                    <img
                      src="img/logo-no-bg.png"
                      alt="Image"
                      className="custom-logo"
                    />
                  </a>
                  <div className="short-description">
                    biboo is a very experienced construction company that give a
                    great service of any kinks of construction project
                  </div>
                  <div className="social-btn">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="#">
                      <i className="fa fa-behance" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h2 className="footer-widget-title">Company</h2>
                  <div className="business-hours">
                    <p>
                      Our support available to help you 24 hours a day, seven
                      days a week.
                    </p>
                    <ul>
                      <li>
                        <a href="#">About US</a>
                      </li>
                      <li>
                        <a href="#">Terms of Serivce</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h2 className="footer-widget-title">Resources</h2>
                  <div className="business-hours">
                    <p>
                      Our support available to help you 24 hours a day, seven
                      days a week.
                    </p>
                    <ul>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="#">Refund Policy</a>
                      </li>
                      <li>
                        <a href="#">Fraud Reporting &amp; Management</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* .col */}
            </div>
            {/* .row */}
          </div>
        </div>
        <div className="container">
          <div className="copy-right-sectin">
            Copyright @ 2023 Paymorz - All Right Reserved
          </div>
        </div>
      </footer>
      {/* End Footer Scetion */}
      {/* Scroll Up Button */}
      <span className="scrollup" id="scrollup" />
      {/* <!-- Scripts --> */}
      <Helmet>
        <script
          type="text/javascript"
          src="/frontend/homeAssets/js/vendor/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="/frontend/homeAssets/js/vendor/modernizr-3.6.0.min.js"
        ></script>
        <script
          type="text/javascript"
          src="/frontend/homeAssets/js/owlCarousel.min.js"
        ></script>
        <script
          type="text/javascript"
          src="/frontend/homeAssets/js/isotope.min.js"
        ></script>
        <script
          type="text/javascript"
          src="/frontend/homeAssets/js/tamjidCounter.mi>n.js"
        ></script>
        <script
          type="text/javascript"
          src="/frontend/homeAssets/js/mailchimp.min.js"
        ></script>
        <script
          type="text/javascript"
          src="/frontend/homeAssets/js/main.js"
        ></script>
      </Helmet>
    </>
  );
}

export default App;
