import Image from 'next/image'
import * as S from './styles'

const Stepper = () => {
  return (
    <S.Wrapper>
      <Image
        src="/stepper-bg.svg"
        alt="Picture of the author"
        fill
        style={{
          objectFit: 'cover',
        }}
      />
      <S.ListSteps>
        <S.StepNumber>1</S.StepNumber>
        <S.StepNumber>1</S.StepNumber>
        <S.StepNumber>1</S.StepNumber>
        <S.StepNumber>1</S.StepNumber>
      </S.ListSteps>
    </S.Wrapper>
  )
}

export default Stepper
