/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Fill = styled.div`
  height: 100%;
  width: var(--width);
  background-color: ${COLORS.primary};
  border-radius: 4px var(--end-border-radius) var(--end-border-radius) 4px;
`;

const Container = styled.div`
  padding: var(--padding);
  border-radius: var(--border-radius);
  height: var(--height);
  width: 100%;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  overflow: hidden;
`;

const computedContainerStyleVariables = {
  large: {
    "--height": "24px",
    "--padding": "4px",
    "--border-radius": "8px",
  },
  medium: {
    "--height": "12px",
    "--border-radius": "4px",
  },
  small: {
    "--height": "8px",
    "--border-radius": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const computedFillStyleVariables = {
    "--end-border-radius": value >= 100 ? "4px" : "0px",
    "--width": `${value}%`,
  };

  return (
    <Container style={computedContainerStyleVariables[size]}>
      <Fill style={computedFillStyleVariables} value={value} />
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Container>
  );
};

export default ProgressBar;
