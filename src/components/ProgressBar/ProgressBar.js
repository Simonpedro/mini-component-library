/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--border-radius": "4px",
    "--height": "8px",
  },
  medium: {
    "--border-radius": "4px",
    "--height": "12px",
  },
  large: {
    "--border-radius": "8px",
    "--padding": "4px",
    "--height": "24px",
  },
};

const Wrapper = styled.div`
  width: 100%;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Progress = styled.div`
  height: 100%;
  width: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;

  &:before {
    content: " ";
    display: block;
    width: var(--progress-width);
    transition: width 400ms ease-out;
    height: 100%;
    background-color: blue;
  }
`;

const ProgressBar = ({ value, size }) => {
  const vars = {
    "--progress-width": value + "%",
    ...SIZES[size],
  };

  return (
    <Wrapper
      style={vars}
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Progress style={vars} />
    </Wrapper>
  );
};

export default ProgressBar;
