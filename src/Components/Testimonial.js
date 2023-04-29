import react from "react";
import "./Testimonial.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <div className="container-fluid main__section">
        <div id="carouselExample" className="carousel slide" data-aos="fade-up">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="client__section">
                <div className="row">
                  <div className="col-lg-12">
                    <img
                      id="clien__picture"
                      className="client__img"
                      src="./images/mahesh-aute.webp"
                      alt="client__image"
                    />
                  </div>
                  <div className="col-lg-12">
                    <p align="justify" className="review__section">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam animi minus modi doloremque delectus esse aut
                      error, illum iste nemo minima, hic totam consectetur
                      asperiores aperiam! Sunt perferendis ipsam sapiente.
                    </p>
                    <p className="review__section">-Mr. Deshmukh </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-12">
                  <img
                    id="clien__picture"
                    className="client__img"
                    src="./images/mahesh-aute.webp"
                    alt="client__image"
                  />
                </div>
                <div className="col-lg-12">
                  <p align="justify" className="review__section">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam animi minus modi doloremque delectus esse aut
                    error, illum iste nemo minima, hic totam consectetur
                    asperiores aperiam! Sunt perferendis ipsam sapiente.
                  </p>
                  <p className="review__section">-Mr. Deshmukh </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-12">
                  <img
                    id="clien__picture"
                    className="client__img"
                    src="./images/mahesh-aute.webp"
                    alt="client__image"
                  />
                  <div className="col-lg-12">
                    <p align="justify" className="review__section">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam animi minus modi doloremque delectus esse aut
                      error, illum iste nemo minima, hic totam consectetur
                      asperiores aperiam! Sunt perferendis ipsam sapiente.
                    </p>
                    <p className="review__section">-Mr. Deshmukh </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
