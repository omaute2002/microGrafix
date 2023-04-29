import react from "react";
import Service from "./Service";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <div className="container-fluid service__section">
        <h1 id="service__title" className="text-center">
          Our Services
        </h1>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-4 ">
            <Service
              image="https://micrografix.durable.co/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1655720031554-a929595ffad7%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwyNjI5NjF8MHwxfHNlYXJjaHwyN3x8R3JhcGhpYyUyMERlc2lnbiUyMHxlbnwwfHx8fDE2ODIwNjcxMDk%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=2048&q=75"
              title="Logo Design"
              description="Creating unique, eye catching logos to give businesses a unique identity."
            />
          </div>
          <div className="col-lg-4 ">
            <Service
              image="https://micrografix.durable.co/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1513542789411-b6a5d4f31634%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwyNjI5NjF8MHwxfHNlYXJjaHwxMnx8R3JhcGhpYyUyMERlc2lnbiUyMHxlbnwwfHx8fDE2ODIwNjcxMDk%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=2048&q=75"
              title="Branding"
              description="Creating custom illustrations for a variety of uses, such as advertising, book covers, and web design."
            />
          </div>
          <div className="col-lg-4 ">
            {/* <img
              src="https://micrografix.durable.co/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1655720031554-a929595ffad7%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwyNjI5NjF8MHwxfHNlYXJjaHwyN3x8R3JhcGhpYyUyMERlc2lnbiUyMHxlbnwwfHx8fDE2ODIwNjcxMDk%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=2048&q=75"
              alt="logo-design-img"
            />
            <h4>Test</h4>
            <p>Sample text will be here</p> */}
            <Service
              image="https://micrografix.durable.co/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1501556424050-d4816356b73e%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwyNjI5NjF8MHwxfHNlYXJjaHw4fHxHcmFwaGljJTIwRGVzaWduJTIwfGVufDB8fHx8MTY4MjA2NzEwOQ%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=2048&q=75"
              title="Print Media"
              description="Developing and executing brand strategies, including logo design, color palettes, and typography."
            />
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-4 col-md-6">
            <Service
              image="https://micrografix.durable.co/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1622551557268-87422f2aa8a9%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwyNjI5NjF8MHwxfHNlYXJjaHwxMXx8TmV3c3BhcGVyJTIwYWR2ZXJ0aXNpbmd8ZW58MHx8fHwxNjgyMTY0NzE5%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=2048&q=75"
              title="Advertising"
              description="Sample text will be here"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <Service
              image="https://micrografix.durable.co/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1576864333214-b2cee50f8283%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwyNjI5NjF8MHwxfHNlYXJjaHwxNnx8QmlsbGJvYXJkfGVufDB8fHx8MTY4MjE2NDc3NA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=2048&q=75"
              title="Outdoor Publicity Design"
              description="Sample text will be here"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <Service
              image="https://micrografix.durable.co/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1606937492590-2c6e942b1951%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwyNjI5NjF8MHwxfHNlYXJjaHwxOHx8UGFja2FnaW5nJTIwfGVufDB8fHx8MTY4MjE2NDgzMg%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=2048&q=75"
              title="Packaging Design"
              description="Sample text will be here"
            />
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-4 col-md-6">
            <Service
              image="https://micrografix.durable.co/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1617384104622-5f04202ca46b%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwyNjI5NjF8MHwxfHNlYXJjaHwxOXx8ZXhoaWJpdGlvbnxlbnwwfHx8fDE2ODIxNjQ4NjU%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=2048&q=75"
              title="Exhibition Design"
              description="Sample text will be here"
            />
          </div>
          <div className="col-lg-4 ">
            <Service
              image="https://micrografix.durable.co/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1481487196290-c152efe083f5%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwyNjI5NjF8MHwxfHNlYXJjaHw5fHx3ZWJzaXRlfGVufDB8fHx8MTY4MjE2MTgzNA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=2048&q=75"
              title="Web Design & Development"
              description="Sample text will be here"
            />
          </div>
          <div className="col-lg-4 ">
            <Service
              image="https://micrografix.durable.co/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1644488030797-48deffe93492%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwyNjI5NjF8MHwxfHNlYXJjaHwyMnx8YnVpbGRpbmclMjAzZCUyMHJlbmRlcmluZ3xlbnwwfHx8fDE2ODIxNjUwNDA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=2048&q=75"
              title="3D Rendering"
              description="Sample text will be here"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
