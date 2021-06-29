import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
        <DisplaySelect>
          {displayedValue}
        </DisplaySelect>
        <NativeSelect value={value} onChange={onChange}>
            {children}
          </NativeSelect>
        <IconWrapper>
          <Icon id="chevron-down" size="24" strokeWidth="2" />
        </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  padding: 12px 16px 8px 16px;
  width: fit-content;
  position: relative;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const DisplaySelect = styled.div`
  display: inline-block;
  padding-right: 24px;
`;

const IconWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export default Select;
