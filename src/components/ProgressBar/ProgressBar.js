/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  'small': {
    height: 8,
    radius: 4,
    padding: 0
  },
  'medium': {
    height: 12,
    radius: 4,
    padding: 0
  },
  'large': {
    height: 16,
    radius: 8,
    padding: 4
  }
}

const ProgressBar = ({ value, size }) => {

  const styles = STYLES[size];
  if (!styles) {
    throw new Error(`Unrecognized ProgressBar size: ${size}`);
  }

  return (
      <Wrapper
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
          '--padding': styles.padding + 'px',
          '--radius': styles.radius + 'px'
        }}
      >
        <BarWrapper>
          <Bar value={value}
            style={{
              '--width': value + '%',
              '--height': styles.height + 'px'
            }}
          />
        </BarWrapper>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  /* Trim corners when progress bar is near full */
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
