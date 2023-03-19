'use client'

import styled from 'styled-components'

type ToggleButtonProps = {
  checked: Boolean
}

export const ToggleWrapper = styled.div`
  background: #f8f9ff;
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
`

export const ToggleButton = styled.span<ToggleButtonProps>`
  width: 38px;
  height: 20px;
  background: #022959;
  border-radius: 10px;
  position: relative;
  margin: 0 24px;
  cursor: pointer;

  &:after {
    content: '';
    transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    background: #ffffff;
    width: 12px;
    height: 12px;
    position: absolute;
    border-radius: 50%;
    top: 4px;
    left: ${(props) => (props.checked ? '22px' : '4px')};
  }
`

export const MonthlyText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #022959;
`

export const YearlyText = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: #9699aa;
  font-weight: 500;
`
