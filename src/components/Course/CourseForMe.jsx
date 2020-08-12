import React from "react";

import "../../assets/styles/components/Course.scss";

const CourseForMe = (props) => {
  return (
    <section className={props.onlyDesktop ? `course__for__me ${props.onlyDesktop}` : "course__for__me"}>
      <div>
        <h2>¿Este Curso es para mi?</h2>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          </li>
          <li>Ut wisi enim ad minim veniam.</li>
          <li>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod
          </li>
          <li>Ut wisi enim ad minim veniam onsectet uer adipiscing.</li>
          <li>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          </li>
          <li>Ut wisi enim ad minim veniam.</li>
          <li>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod
          </li>
          <li>Ut wisi enim ad minim veniam onsectet uer adipiscing.</li>
        </ul>
      </div>
    </section>
  );
};
export default CourseForMe;
