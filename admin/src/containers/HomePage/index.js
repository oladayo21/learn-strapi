import React, { memo } from "react";
import styled from "styled-components";

const H2 = styled.h2`
  font-weight: bold;
  margin-bottom: 10px;
`;
const InsideBackground = styled.span`
  background-color: black;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2px;
  padding-bottom: 2px;
  display: inline-block;
  line-height: 120%;
`;

function HomePage(props) {
  return (
    <div style={{ padding: "3rem" }}>
      <H2>
        <InsideBackground>
          Welcome in the PS-kitchen. The place where your offer pages can be
          served.
        </InsideBackground>
      </H2>
    </div>
  );
}
export default memo(HomePage);
