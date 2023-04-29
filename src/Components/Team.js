import react from "react";
import TeamMember from "./TeamMember";
import "./Team.css";
import AOS from "aos";
import { useEffect } from "react";

function Team() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <div className="container-fluid parent__section text-center">
        <h1 className="section__title">The Team</h1>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-3">
            <TeamMember
              image="./images/mahesh-aute.webp"
              name="Mahesh Aute"
              about="MicroGrafix | &We Media | VIW"
              about_L_1="Founder"
            />
          </div>
          <div className="col-lg-3">
            <TeamMember
              image="data:image/jpeg;base64,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"
              name="Bhakti Aute"
              about="Managing Director, &We Media"
            />
          </div>
          <div className="col-lg-3">
            <TeamMember
              image="data:image/jpeg;base64,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"
              name="Satyajeet Patil"
              about="Co-Founder, &We Media"
            />
          </div>
          <div className="col-lg-3">
            <TeamMember
              image="data:image/jpeg;base64,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"
              name="Utkarsha Patil"
              about="Co-Founder, &We Media"
            />
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-3">
            <TeamMember
              image="./images/mahesh-aute.webp"
              name="Mahesh Aute"
              about="Founder, MicroGrafix"
            />
          </div>
          <div className="col-lg-3">
            <TeamMember
              image="./images/mahesh-aute.webp"
              name="Mahesh Aute"
              about="Founder, MicroGrafix"
            />
          </div>
          <div className="col-lg-3">
            <TeamMember
              image="./images/mahesh-aute.webp"
              name="Mahesh Aute"
              about="Founder, MicroGrafix"
            />
          </div>
          <div className="col-lg-3">
            <TeamMember
              image="./images/mahesh-aute.webp"
              name="Mahesh Aute"
              about="Founder, MicroGrafix"
            />
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-3">
            <TeamMember
              image="./images/mahesh-aute.webp"
              name="Mahesh Aute"
              about="Founder, MicroGrafix"
            />
          </div>
          <div className="col-lg-3">
            <TeamMember
              image="./images/mahesh-aute.webp"
              name="Mahesh Aute"
              about="Founder, MicroGrafix"
            />
          </div>
          <div className="col-lg-3">
            <TeamMember
              image="./images/mahesh-aute.webp"
              name="Mahesh Aute"
              about="Founder, MicroGrafix"
            />
          </div>
          <div className="col-lg-3">
            <TeamMember
              image="./images/mahesh-aute.webp"
              name="Mahesh Aute"
              about="Founder, MicroGrafix"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
