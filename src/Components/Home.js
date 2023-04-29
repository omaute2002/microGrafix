import react from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container-fluid text-center home__container">
        <div className="row">
          <div className="col-12">
            <h1 id="title_text">Graphic Designing</h1>
          </div>
          <div className="col-12">
            <p id="home_info" align="justify">
              Micrografix is a creative graphic design agency that offers
              comprehensive solutions to all your graphic design needs. We
              specialize in logo design, branding, digital marketing, and web
              design to help your business stand out. With our innovative and
              creative approach, we'll ensure you get the best results for your
              projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
