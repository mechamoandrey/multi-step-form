import Image from 'next/image'
import * as S from './styles'
import { ReactElement } from 'react'

export type StepperProps = {
  arraySteps: ReactElement[]
  activeIndex: number
  active?: Boolean
}

const Stepper = ({ arraySteps, activeIndex }: StepperProps) => {
  return (
    <S.Wrapper>
      <Image
        src="/stepper-bg.svg"
        alt="Picture of the author"
        fill
        priority
        style={{
          objectFit: 'cover',
        }}
      />
      <S.ListSteps>
        {arraySteps.map((el, index) => (
          <S.StepNumber active={activeIndex === index} key={index}>
            {index + 1}
          </S.StepNumber>
        ))}
      </S.ListSteps>
    </S.Wrapper>
  )
}

export default Stepper
