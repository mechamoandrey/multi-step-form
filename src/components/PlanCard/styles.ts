'use client'

import theme from '@/styles/theme'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { PlanCardProps } from '.'

type WrapperProps = Pick<PlanCardProps, 'marked'>

const wrapperModifiers = {
  active: () => css`
    border: 1px solid #483eff;
    background-color: #f8f9ff;
  `,
}

export const Wrapper = styled.div<WrapperProps>`
  border: 1px solid #d6d9e6;
  border-radius: ${theme.border.smallRadius};
  padding: 14px 16px 17px;
  display: flex;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  ${({ marked }) => css`
    ${!!marked && wrapperModifiers[marked]}
  `}

  ${media.greaterThan('medium')`
    display: block;
    padding: 20px 16px 16px;
    width: 138px;
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 18px;
    }
  `}
`

export const WrapperIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 14px;
  position: relative;

  ${media.greaterThan('medium')`
    margin: 0 0 38px;
  `}
`

export const Name = styled.h3`
  font-weight: ${theme.font.normal};
  font-size: ${theme.sizes.medium};
  line-height: 18px;
  margin-bottom: 8px;
  color: ${theme.colors.primary};
`

export const PlanValue = styled.span`
  font-weight: ${theme.font.normal};
  font-size: ${theme.sizes.small};
  line-height: 20px;
  color: #9699aa;
  display: block;
  &:not(:last-child) {
    margin-bottom: 3px;
  }

  ${media.greaterThan('medium')`
    &:not(:last-child) {
      margin-bottom: 6px;
    }
  `}
`

export const PlanAdvice = styled.span`
  color: ${theme.colors.primary};
  line-height: 20px;
  font-size: ${theme.sizes.xsmall};
  font-weight: ${theme.font.normal};

  ${media.greaterThan('medium')`
    line-height: 14px;
  `}
`
