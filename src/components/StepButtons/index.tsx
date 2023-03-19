import * as S from './styles'

export type StepButtonsProps = {
  onNext: Function
  onBack: Function
  isFirstStep: Boolean
  isLastStep: Boolean
}

const StepButtons = ({
  onNext,
  onBack,
  isFirstStep,
  isLastStep,
}: StepButtonsProps) => {
  return (
    <S.Wrapper isFirstStep={isFirstStep}>
      {!isFirstStep && (
        <S.BackButton onClick={() => onBack()}>Go Back</S.BackButton>
      )}

      {!isLastStep ? (
        <S.NextButton onClick={() => onNext()}>next step</S.NextButton>
      ) : (
        <S.NextButton onClick={() => console.log('a')}>confirm</S.NextButton>
      )}
    </S.Wrapper>
  )
}

export default StepButtons
