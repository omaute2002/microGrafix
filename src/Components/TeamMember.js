import react from "react";
import "./TeamMember.css";

function TeamMember({ image, name, about, about_L_1 }) {
  return (
    <>
      <div className="container-fluid text-center">
        <img
          id="profile__pic"
          className="img-fluid"
          src={image}
          alt="profile-pic"
        />
        <h2 className="member__name">{name}</h2>
        <p className="member__position">{about_L_1}</p>
        <p className="member__info">{about}</p>
      </div>
    </>
  );
}

export default TeamMember;
