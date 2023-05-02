import react from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="container-fluid footer__section ">
        <div className=" text-center">
          <h3 className="footer__title">MicroGrafix</h3>
          <a href="https://www.instagram.com/micro_grafix/?hl=en">
            <i class="fa-brands fa-instagram fa-xl"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-whatsapp fa-xl"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-facebook fa-xl"></i>
          </a>
          <p className="footer__text">Made by Micrografix</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
