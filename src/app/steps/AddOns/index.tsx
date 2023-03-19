import FormHeading from '@/components/FormHeading'
import PlanCard from '@/components/PlanCard'
import FormWrapper from '@/components/FormWrapper'

const AddOns = () => {
  return (
    <FormWrapper>
      <FormHeading level="h1" text="Add Ons" />
      <FormHeading level="h2" text="Bla bla" />

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

export default AddOns
