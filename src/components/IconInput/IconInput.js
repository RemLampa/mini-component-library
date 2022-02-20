import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import BaseIcon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Input = styled.input`
  width: var(--width);
  border: none;
  border-bottom: var(--border-bottom-width) solid ${COLORS.black};
  padding: 4px;
  padding-left: var(--padding-left);
  outline-offset: 2px;

  font-size: var(--font-size);
  font-weight: 700;

  color: ${COLORS.gray700};

  &:focus {
    color: ${COLORS.black};
  }

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const Icon = styled(BaseIcon)`
  position: absolute;
  top: ${(props) => {
    return {
      small: 6,
      large: 4,
    }[props.variant];
  }}px;
  left: 2px;

  color: ${COLORS.gray700};

  ${Input}:focus + & {
    color: ${COLORS.black};
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const computedInputVariantStyles = {
    small: {
      "--border-bottom-width": "1px",
      "--padding-left": "22px",
      "--font-size": `${14 / 16}em`,
    },
    large: {
      "--border-bottom-width": "2px",
      "--padding-left": "34px",
      "--font-size": `${18 / 16}em`,
    },
  }[size];

  const computedInputStyles = {
    "--width": `${width}px`,
    ...computedInputVariantStyles,
  };

  const iconProps = {
    small: {
      size: 12,
      strokeWidth: 1,
    },
    large: {
      size: 20,
      strokeWidth: 2,
    },
  }[size];

  return (
    <Container>
      <label>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Input style={computedInputStyles} placeholder={placeholder} />
        {icon && <Icon id={icon} variant={size} {...iconProps} />}
      </label>
    </Container>
  );
};

export default IconInput;
