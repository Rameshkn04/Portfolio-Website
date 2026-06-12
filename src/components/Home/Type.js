import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI/ML Engineer",
          "Generative AI Developer",
          "Machine Learning Enthusiast",
          "Full Stack Developer",
          "Research Author",
          "Patent Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 75,
      }}
    />
  );
}

export default Type;