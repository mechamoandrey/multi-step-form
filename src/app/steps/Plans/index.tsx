'use client'
import FormHeading from '@/components/FormHeading'
import PlanCard from '@/components/PlanCard'
import FormWrapper from '@/components/FormWrapper'

import * as S from './styles'
import { useState } from 'react'
import data from './data'

const Plans = () => {
  const [isYearlyPlans, setIsYearlyPlans] = useState(false)
  const [choosedPlan, setChoosedPlan] = useState<Boolean | Number>(false)

  return (
    <FormWrapper>
      <FormHeading level="h1" text="Select your plan" />

      <FormHeading
        level="h2"
        text="You have the option of monthly or yearly billing."
      />

      {data.map((card, index) => (
        <PlanCard
          key={index}
          marked={choosedPlan === index && 'active'}
          icon="plan-icon-arcade.svg"
          name={card.name}
          planValue={card.value}
          isYearly={isYearlyPlans}
          onClick={() => setChoosedPlan(index)}
        />
      ))}

      <S.ToggleWrapper>
        <S.MonthlyText>Monthly</S.MonthlyText>
        <S.ToggleButton
          checked={isYearlyPlans}
          onClick={() => setIsYearlyPlans(!isYearlyPlans)}
        />
        <S.YearlyText>Yearly</S.YearlyText>
      </S.ToggleWrapper>
    </FormWrapper>
  )
}

export default Plans
