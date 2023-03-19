'use client'

import theme from '@/styles/theme'
import styled from 'styled-components'
import { StepButtonsProps } from '.'

type WrapperProps = Pick<StepButtonsProps, 'isFirstStep'>

export const Wrapper = styled.div<WrapperProps>`
  height: 72px;
  width: 100vw;
  padding: 16px;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
  display: flex;
  align-items: center;

  justify-content: ${(props) =>
    props.isFirstStep ? 'flex-end' : 'space-between'};
`

export const BackButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #9699aa;
  background-color: transparent;
  border: none;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    opacity: 0.8;
  }
`

export const NextButton = styled.button`
  width: fit-content;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  background-color: ${theme.colors.primary};
  border-radius: 4px;
  border: none;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    background-color: #164a8a;
  }
`
