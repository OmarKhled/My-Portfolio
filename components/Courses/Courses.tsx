import React from "react";
import styled from "styled-components";
import courses from "@data/courses";
import Course from "@components/Course/Course";

const Courses = () => {
  return (
    <Wrapper>
      {courses?.map((course) => (
        <Course {...course} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 3rem 0 3rem 0;
  justify-content: center;
`;

export default Courses;
