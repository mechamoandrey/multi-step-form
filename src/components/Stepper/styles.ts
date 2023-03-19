'use client'

import styled from 'styled-components'
import { StepperProps } from '.'
import theme from '@/styles/theme'

type StepNumberProps = Pick<StepperProps, 'active'>

export const Wrapper = styled.div`
  position: relative;
  height: 172px;
`

export const ListSteps = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 32px;
`

export const StepNumber = styled.span<StepNumberProps>`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => (props.active ? theme.colors.primary : '#ffffff')};
  border: ${(props) => (props.active ? 'none' : '1px solid #ffffff')};
  border-radius: 100%;
  width: 33px;
  height: 33px;
  background-color: ${(props) => (props.active ? '#BEE2FD;' : 'transparent')};

  &:not(:last-child) {
    margin-right: 16px;
  }
`
