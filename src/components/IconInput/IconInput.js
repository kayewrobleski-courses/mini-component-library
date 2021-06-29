import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    iconSize: 16,
    borderThickness: 1,
    fontSize: 14,
    height: 24
  },
  large: {
    iconSize: 24,
    borderThickness: 2,
    fontSize: 18,
    height: 36
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const styles = STYLES[size];
  if (!styles) {
    throw new Error(`Unrecognized IconInput size: ${size}`);
  }

  return <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper style={{
      '--size': styles.iconSize + 'px'
      }}
    >
      <Icon id={icon} size={styles.iconSize} strokeWidth={styles.borderThickness}></Icon>
    </IconWrapper>
    <InputWrapper
      placeholder={placeholder}
      style={{
        '--width': width + 'px',
        '--font-size': styles.fontSize + 'px',
        '--height': styles.height + 'px',
        '--border-thickness': styles.borderThickness + 'px'
      }}
    />
  </Wrapper>
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`
const InputWrapper = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
