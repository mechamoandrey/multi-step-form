'use client'

import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { FormHeadingProps } from '.'
import theme from '@/styles/theme'

type WrapperProps = Pick<FormHeadingProps, 'level'>

const wrapperModifiers = {
  h2: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.sizes.medium};
    line-height: 25px;
    color: #9699aa;
    margin-bottom: 22px;

    ${media.greaterThan('medium')`
      margin-bottom: 40px;
    `}
  `,

  h1: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    margin-bottom: 8px;
    line-height: 28px;
    font-size: 24px;

    ${media.greaterThan('medium')`
      font-size: 32px;
      line-height: 37px;
      margin-bottom: 12px;
    `}
  `,
}

export const Wrapper = styled('h1').attrs<WrapperProps>(({ level }) => ({
  as: `${level}`,
}))<WrapperProps>`
  ${({ level = 'h1' }) => css`
    ${!!level && wrapperModifiers[level](theme)}
  `}
`
