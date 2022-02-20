import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import BaseIcon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";
import VisuallyHidden from "../VisuallyHidden";

const Dropdown = styled.select`
  font-size: 1em;
  font-weight: 400;
  padding: 12px;
  padding-right: 52px;
  cursor: pointer;

  appearance: none;

  border: 0;
  border-radius: 8px;

  color: ${COLORS.gray700};

  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Icon = styled(BaseIcon)`
  position: absolute;
  right: 10px;
  top: 10px;

  color: ${COLORS.gray700};

  ${Dropdown}:hover + & {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Dropdown value={value} onChange={onChange}>
        {children}
      </Dropdown>
      <Icon id="chevron-down" strokeWidth={2} />
    </Wrapper>
  );
};

export default Select;
