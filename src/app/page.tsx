'use client'
import Stepper from '@/components/Stepper'
import StepButtons from '@/components/StepButtons'
import useStepHandler from '@/hooks/useStepHandler'
import Plans from './steps/Plans'
import AddOns from './steps/AddOns'

export default function Home() {
  const {
    Step,
    nextStep,
    backStep,
    isFirstStep,
    isLastStep,
    currentStepIndex,
    steps,
  } = useStepHandler([<AddOns key={0} />, <Plans key={1} />])

  return (
    <main>
      <Stepper activeIndex={currentStepIndex} arraySteps={steps} />
      <Step />
      <StepButtons
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        onBack={backStep}
        onNext={nextStep}
      />
    </main>
  )
}
