import react from "react";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <div className="container-fluid main__container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="text-center" id="section__title">
              About us
            </h3>
          </div>
          <div className="col-lg-12" data-aos="fade-up">
            <p className="text-container" id="section__para" align="justify">
              I am the proud owner of Micrografix, a graphic design business
              based in Aurangabad, Maharashtra. We specialize in creating
              beautiful and creative designs for our clients, ranging from logos
              and websites to flyers and brochures. Our team of experienced
              professionals is dedicated to providing high-quality work that is
              tailored to our clients' needs. We strive to ensure that our
              clients are happy with the end result, and that their vision is
              brought to life.We have been in business for over five years, and
              have built a strong reputation for delivering excellent results
              for our clients. We have a wide range of services that we offer,
              and we are always looking for ways to improve our services and
              expand our business. We are constantly innovating and exploring
              new ways to help our clients get the most out of their graphic
              design projects. We are committed to providing our clients with
              the best possible service, and strive to make sure that our
              designs are always up to date and reflect their vision.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
