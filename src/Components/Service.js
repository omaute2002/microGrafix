import react from "react";
import "./Service.css";

function Service({ image, title, description }) {
  return (
    <>
      <div className="main__service text-center">
        <img
          className="img-fluid service__img"
          src={image}
          alt="logo-design-image"
        />
        {/* <div className="img-fluid service__img">{image}</div> */}
        <h3 id="service__name" className="text-center">
          {title}
        </h3>
        <p id="service_descrip" align="justify" className="text-center">
          {description}
        </p>
      </div>
    </>
  );
}

export default Service;
