import FormHeading from '@/components/FormHeading'
import PlanCard from '@/components/PlanCard'
import FormWrapper from '@/components/FormWrapper'

const Plans = () => {
  return (
    <FormWrapper>
      <FormHeading level="h1" text="Select your plan" />
      <FormHeading
        level="h2"
        text="You have the option of monthly or yearly billing."
      />

      <PlanCard
        marked="active"
        icon="plan-icon-arcade.svg"
        name="arcade"
        planValue="aoba"
      />
      <PlanCard
        marked="active"
        icon="plan-icon-arcade.svg"
        name="arcade"
        planValue="aoba"
      />
      <PlanCard
        marked="active"
        icon="plan-icon-arcade.svg"
        name="arcade"
        planValue="aoba"
      />
    </FormWrapper>
  )
}

export default Plans
