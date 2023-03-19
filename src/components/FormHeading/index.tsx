import * as S from './styles'

export type FormHeadingProps = {
  text: string
  level?: 'h1' | 'h2'
}

const FormHeading = ({ text, level = 'h1' }: FormHeadingProps) => {
  return <S.Wrapper level={level}>{text}</S.Wrapper>
}

export default FormHeading
