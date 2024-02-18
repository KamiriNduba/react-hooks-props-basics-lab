import React from "react";
import PropTypes from "prop-types";
import Links from "./link";
function About(props) {
  return (
    <div id="about">
      {props.bio && <p>{props.bio}</p>}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

About.propTypes = {
  bio: PropTypes.string,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default About;
