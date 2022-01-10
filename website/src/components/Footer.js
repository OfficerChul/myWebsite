import React from "react";
import "./Footer.css";
import logo from "../components/MainPage/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/* <div className="footer-shaow">dd</div> */}
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a href="/" className="my-logo">
              <img src={logo} className="logo-footer"></img>Kyochul Jang
            </a>
            {/* I tried to use {Link} instead of react-router-dom, but its not working.} */}
          </div>
          <div className="website-right-and-social">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100003819070404"
                className="facebook"
                target="_blank"
              >
                <i class="fab fa-facebook" />
              </a>
              <a
                href="https://www.instagram.com/kjang_hochul/"
                className="instagram"
                target="_blank"
              >
                <i class="fab fa-instagram" />
              </a>
              <a
                href="https://www.wechat.com/"
                className="weixin"
                target="_blank"
              >
                <i class="fab fa-weixin" />
              </a>
              {/* mobile screen to show my qr code(wechat) */}
              <a
                href="https://www.linkedin.com/in/kyochul-jang-93b263208/"
                className="linked-in"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <small className="website-rights">JKC © 2020</small>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
