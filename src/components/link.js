import React from "react";
import PropTypes from "prop-types";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={props.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  );
}

Links.propTypes = {
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default Links;
