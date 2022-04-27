import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: #24D982;
  stroke-width: 4px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: #2F313E;
  border-radius: 3px;
  transition: all 150ms;
  border:2px solid #24D982;
  cursor: pointer;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px #24D982;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`

const Checkbox = ({  checked, ...props }) => (
  <CheckboxContainer >
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Checkbox;
