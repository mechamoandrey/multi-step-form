'use client'

import { ReactElement, useState } from 'react'

const useStepHandler = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const lastStep = steps.length - 1

  const nextStep = () => {
    setCurrentStepIndex((index) => {
      if (index >= lastStep) {
        return index
      }

      return index + 1
    })
  }

  const backStep = () => {
    setCurrentStepIndex((index) => {
      if (index <= 0) return index
      return index - 1
    })
  }

  const goToStep = (index: number) => {
    setCurrentStepIndex(index)
  }

  return {
    nextStep,
    backStep,
    goToStep,
    currentStepIndex,
    Step: () => steps[currentStepIndex],
    steps,
    isLastStep: currentStepIndex === steps.length - 1,
    isFirstStep: currentStepIndex === 0,
    stepLength: steps.length,
  }
}

export default useStepHandler
