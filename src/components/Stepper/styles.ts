'use client'

import styled from 'styled-components'

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

export const StepNumber = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 100%;
  width: 33px;
  height: 33px;

  &:not(:last-child) {
    margin-right: 16px;
  }
`
