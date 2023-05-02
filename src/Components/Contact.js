import react from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <div className="container-fluid contact__section">
        <div className="row" id="contact__row_1" data-aos="fade-up">
          <div className="col-lg-6">
            <form action="" method="POST">
              <div className="row">
                <div className="col-lg">
                  <p className="form_text">Name</p>
                  <input type="text" name="name" />
                </div>
                <div className="col-lg">
                  <p className="form_text">E-mail</p>
                  <input type="email" name="email" />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="form_text__message">Message</p>
                  <textarea name="Message" id="" cols="20" rows="10"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <span className="text-policy">
                    This site is protected by reCAPTCHA and the{" "}
                    <strong>Google Privacy</strong> Policy and Terms of Service
                    apply
                  </span>
                </div>
                <div className="col-lg-4 text-center">
                  <button
                    className="btn w-36 mt-2 md:mt-0 float-end"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <h3 className="contact__title">
              Contact Micrografix Graphic Design
            </h3>

            <p className="contact__about">
              Get in touch with Micrografix, a professional graphic design
              business. We provide creative services in branding, logo design,
              illustration and more. Contact us today to discuss your project.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
