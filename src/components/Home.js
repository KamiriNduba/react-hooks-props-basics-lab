import React from "react";
import PropTypes from "prop-types";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {props.user.name} is a Web Developer from {props.user.city}
      </h1>
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
};

export default Home;
