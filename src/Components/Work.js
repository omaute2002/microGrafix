import react from "react";
import "./Work.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Work() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <div className="container-fluid parent_container">
        <h1 className="text-center" data-aos="fade-up">
          Our Work
        </h1>
        <div className="container-fluid gallery-container text-center">
          <img
            data-aos="fade-up"
            className="img-fluid work__image"
            id="work__image_left"
            src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <img
            data-aos="fade-up"
            className="img-fluid work__image"
            id="work__image_left"
            src="https://images.unsplash.com/photo-1656164631668-8673eab87b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNxdWFyZSUyMGRpbWVuc2lvbnMlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <img
            data-aos="fade-up"
            className="img-fluid work__image"
            id="work__image_left"
            src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <img
            data-aos="fade-up"
            className="img-fluid work__image"
            id="work__image_left"
            src="https://images.unsplash.com/photo-1556742400-b5b7c5121f99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNxdWFyZSUyMGRpbWVuc2lvbnMlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <img
            data-aos="fade-up"
            className="img-fluid work__image"
            id="work__image_left"
            src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <img
            data-aos="fade-up"
            className="img-fluid work__image"
            id="work__image_left"
            src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Work;

{
  /* <div className="row" id="image_row">
          <div className="col-lg-4" id="image_col">
            <img
              className="img-fluid "
              id="work__image_left"
              src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="col-lg-4" id="image_col">
            <img
              className="img-fluid"
              id="work__image_mid"
              src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="col-lg-4" id="image_col">
            <img
              className="img-fluid"
              id="work__image_right"
              src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
        </div>
        <div className="row" id="image_row">
          <div className="col-lg-4" id="image_col">
            <img
              className="img-fluid "
              id="work__image_left"
              src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="col-lg-4" id="image_col">
            <img
              className="img-fluid"
              id="work__image_mid"
              src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="col-lg-4" id="image_col">
            <img
              className="img-fluid"
              id="work__image_right"
              src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          </div> */
}
