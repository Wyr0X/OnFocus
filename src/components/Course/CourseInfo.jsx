import React, { useState } from "react";
import { connect } from "react-redux";

import CourseInfoOnlyInfo from "./CourseInfoOnlyInfo";
import CourseAbout from "./AboutCourse/CourseAbout";
import CourseSaveMoney from "./CourseSaveMoney";

import Information from "../Course/InformationCourse/Information";
import SmallVideo from "../Visualization/SmallVideo";

import "../../assets/styles/components/CoursePlus.scss";

const CourseInfo = ({ category }) => {
  const [isToggle, setIsToggle] = useState(false);
  const isToggleFalse = () => setIsToggle(!isToggle);
  return (
    <div className="course">
      <Information OnlyDesktop={"display__screen__desktop"} />
      <div className="flex">
        <SmallVideo
          OnlyDesktop={"display__screen__desktop"}
          video_id={category.video_intro}
        />
        <CourseSaveMoney />
      </div>
      <div>
        <Information onlyMobile={"display__screen__mobile"} />
        <CourseSaveMoney onlyMobile />
        <h2 onClick={isToggleFalse} className="display__screen__mobile">
          Ocultar información {isToggle ? "-" : "+"}
        </h2>
        {isToggle ? (
          <>
            <h1 className="course__info__title">Informacion</h1>
            <CourseInfoOnlyInfo
              onlyMobile={"display__screen__mobile__without__flex"}
              width={"course__information__text__width"}
              logoMobile={"course__logo__mobile"}
              margin={"course__logo__mobile__margin"}
            />
            <CourseAbout />
          </>
        ) : (
          ""
        )}
        <div className="display__screen__desktop">
          <h1 className="course__info__title">Informacion</h1>
          <CourseInfoOnlyInfo
            onlyMobile={"display__screen__mobile__without__flex"}
            width={"course__information__text__width"}
            logoMobile={"course__logo__mobile"}
            margin={"course__logo__mobile__margin"}
          />
          <CourseAbout />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    category: state.category || {},
  };
};

export default connect(mapStateToProps, null)(CourseInfo);
