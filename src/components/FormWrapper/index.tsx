import { ReactNode } from 'react'
import * as S from './styles'

type FormWrapperProps = {
  children: ReactNode
}

const FormWrapper = ({ children }: FormWrapperProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default FormWrapper
