import React from "react";
import Navbar from "./Navbar";
import Vector from "../Assets/Vector 3.png";
import Line1 from "../Assets/Line 1.png";
import Line2 from "../Assets/Line 2.png";
import Line3 from "../Assets/Line 3.png";
import back from "../Assets/Rectangle 55.png";
import main from "../Assets/pngegg 1.png";
import elips2 from "../Assets/Ellipse 2.svg";
import elips3 from "../Assets/Ellipse 3.svg";
import elips4 from "../Assets/Ellipse 4.svg";
import dollar from "../Assets/Rectangle 63.png";
import png1 from "../Assets/pngegg (1) 1.png";
import png2 from "../Assets/Daco_4505039 1.png";
import png3 from "../Assets/The-man's-brown-shoes-isolated-on-transparent-background-PNG 1.png";
import png4 from "../Assets/pngegg (5) 1.png";
import logo from "../Assets/Roverz-Logo 1.png";
import img1 from "../Assets/mostafa-mahmoudi-KKsB-eOAjVo-unsplash 1.png";
import img2 from "../Assets/lukas-godina-DJax2Hpe2tU-unsplash 1.png";
import img3 from "../Assets/noah-smith-1z2hBTKHdWI-unsplash 1.png";
import img4 from "../Assets/jia-ye-erHlzWCN6zQ-unsplash 1.png";
import img5 from "../Assets/noah-smith-LkuH3Txi_gs-unsplash 1.png";
import img6 from "../Assets/mostafa-mahmoudi-3OZr-hLbsq0-unsplash 1.png";
function Home() {
  return (
    <>
      <Navbar />
      <section className="phela">
        <div className="first">
          <h3 className="heading">
            Step up your Style <br /> with our latest <br /> Shoes Collection
          </h3>
          <p className="paragraph">
            Elevate Your Look with the Perfect Pair, <br />
            Shop Our Exclusive Shoe Selection Today
          </p>
        </div>
        <div className="form">
          <img src={Vector} alt="" />
          <input type="email" placeholder="Your Email" />
          <button>Start For Free</button>
          <button>See Special Discounts</button>
          <div className="line">
            <img src={Line1} alt="" />
            <img src={Line2} alt="" />
            <img src={Line3} alt="" />
          </div>
        </div>
      </section>

      <section className="dusra">
        <div className="left">
          <div className="names">
            <h3>Essential Men’s Shoes</h3>
            <h1>Sole</h1>
            <h2>NOVA</h2>
          </div>

          <div className="circle">
            <img src={elips2} alt="" />
            <img src={elips3} alt="" />
            <img src={elips4} alt="" />
          </div>

          <div className="tags">
            <div>
              <span>&#8595;</span>
            </div>
            <div>
              <p>Price</p>
              <img src={dollar} alt="" />
              <span>$</span>
            </div>

            <div>
              <h5>235</h5>
            </div>
            <div>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>

        <div className="right">
          <img src={back} alt="" />
          <img src={main} alt="" />
        </div>
      </section>

      <section className="teesra">
        <h1>Similar items you might like</h1>
        <div className="box">
          <div className="boxes">
            <div className="mini-circle">
              <i class="ri-heart-3-line"></i>
            </div>
            <img src={png1} alt="" />
            <div className="pricenname">
              <p>Urban Tread</p>
              <p>$190</p>
            </div>
            <div className="star">
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <span>(139)</span>
            </div>
            <button className="cart">Add To Cart</button>
          </div>

          <div className="boxes">
            <div className="mini-circle">
              <i class="ri-heart-3-line"></i>
            </div>
            <img src={png2} alt="" className="fr" />
            <div className="pricenname">
              <p>Urban Tread</p>
              <p>$190</p>
            </div>
            <div className="star">
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <span>(139)</span>
            </div>
            <button className="cart2">Add To Cart</button>
          </div>

          <div className="boxes">
            <div className="mini-circle">
              <i class="ri-heart-3-line"></i>
            </div>
            <img src={png3} alt="" />
            <div className="pricenname">
              <p>Urban Tread</p>
              <p>$190</p>
            </div>
            <div className="star">
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <span>(139)</span>
            </div>
            <button className="cart">Add To Cart</button>
          </div>

          <div className="boxes">
            <div className="mini-circle">
              <i class="ri-heart-3-line"></i>
            </div>
            <img src={png4} alt="" className="fr2" />
            <div className="pricenname">
              <p>Urban Tread</p>
              <p>$190</p>
            </div>
            <div className="star">
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <span>(139)</span>
            </div>
            <button className="cart">Add To Cart</button>
          </div>
        </div>
      </section>

      <section className="chota">
        <h6 className="heading">Follow us on</h6>
        <img src={logo} alt="" />
        <div className="images">
          <div>
            <img src={img1} alt="" />
            <h6>Prada</h6>
          </div>
          <div>
            <img src={img2} alt="" />
            <h6>Gucci</h6>
          </div>
          <div>
            <img src={img3} alt="" />
            <h6>Clarks</h6>
          </div>
          <div>
            <img src={img4} alt="" />
            <h6>Bally</h6>
          </div>
          <div>
            <img src={img5} alt="" />
            <h6>Ecco</h6>
          </div>
          <div>
            <img src={img6} alt="" />
            <h6>Alden</h6>
          </div>
        </div>
      </section>

      <section className="panchwa">
        <div className="left">
<img src={logo} alt="" />
<div className="input"> 
<input type="email" placeholder="Your email" />
  <button>Sign up</button>
</div>
<p>Already have an account? Log in</p>
        </div>
        <div className="right">
          <img src={png1} alt="" />
        </div>
      </section>


      <section className="chata">
        <div className="one">
          <img src={logo} alt="" />
          <p>Roverz &copy; 2024 | All Rights Reserved</p>
        </div>
        <div className="two">
          <h3>Contact</h3>
          <div>
          <i className="ri-map-pin-2-fill"></i> <span>Gotham City</span>
          </div>
          <div>
          <i className="ri-mail-fill"></i> <span>roverz@gmail.com</span>
          </div>
          <div>
          <i className="ri-phone-fill"></i> <span>892976172</span>
          </div>
        </div>
        <div className="three">
          <h3>Quick links</h3>
          <div>home</div>          
          <div>shop</div>          
          <div>Contact</div>          
          <div>about</div>          
          <div>faqs</div>          
        </div>
        <div className="four">
          <h3>Follow us</h3>
          <div className="socialicons">
          <i className="ri-facebook-fill"></i>
          <i className="ri-instagram-fill"></i>
          <i className="ri-linkedin-fill"></i>
          <i className="ri-twitter-fill"></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
