import react from "react";
import "./Header.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
// navbar-expand-lg
// bg-body-tertiary
function Header() {
  return (
    <>
      <nav className="navbar   navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <img
            className="img-responsive brand-logo "
            src="./images/micro-logo.png"
            alt="brand-logo"
          />
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a href="https://www.instagram.com/">
                  <i class="fa-brands fa-instagram fa-xl"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="">
                  <i class="fa-brands fa-whatsapp fa-xl"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="">
                  <i class="fa-brands fa-facebook fa-xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
