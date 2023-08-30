import React from "react";
import styled from "styled-components";
import positions from "@data/positions";
import Position from "@components/Position/Position";

const Positions = () => {
  return (
    <Wrapper>
      {positions?.map((position) => (
        <Position key={position.name} {...position} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 3rem 0 3rem 0;
  justify-content: center;
`;

export default Positions;
