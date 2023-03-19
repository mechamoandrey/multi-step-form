'use client'

import theme from '@/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  width: calc(100vw - 32px);
  padding: 32px 24px;
  margin: 0 auto;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
  border-radius: ${theme.border.radius};
  background-color: white;
  top: -73px;
  position: relative;
  max-height: calc(100vh - 195px);
  overflow-y: scroll;
  transition: height 200ms ease-in-out;

  ${media.greaterThan('medium')`
    width: unset;
    padding: unset;
    box-shadow: unset;
    margin: unset;
    top: unset;
  `}
`
