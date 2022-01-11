import React, { useState } from "react";
import "./Footer.css";
import Modal from "react-modal";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="footer-container">
      {/* <div className="footer-shaow">dd</div> */}
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="website-right-and-social">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100003819070404"
                className="facebook"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-facebook" />
              </a>
              <a
                href="https://www.instagram.com/kjang_hochul/"
                className="instagram"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-instagram" />
              </a>
              <div className="weixin" target="_blank" rel="noreferrer">
                <i class="fab fa-weixin" onClick={() => setIsModalOpen(true)} />
              </div>
              <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className="wechat-modal"
                closeTimeoutMS={200}
              >
                <img
                  src="/images/wechat_qrcode.jpg"
                  alt="qrcode"
                  className="wechat-modal-img"
                ></img>
              </Modal>
              <a
                href="https://www.linkedin.com/in/kyochul-jang-93b263208/"
                className="linked-in"
                target="_blank"
                rel="noreferrer"
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
