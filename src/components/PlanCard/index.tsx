import Image from 'next/image'
import * as S from './styles'

export type PlanCardProps = {
  name: string
  planValue: string
  planAdvice?: string
  icon: string
  marked?: 'active'
  alt?: string
}

const PlanCard = ({
  name,
  planValue,
  planAdvice,
  icon,
  marked,
  alt = '',
}: PlanCardProps) => {
  return (
    <S.Wrapper marked={marked}>
      <S.WrapperIcon>
        <Image
          src={`/${icon}`}
          alt={alt}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </S.WrapperIcon>
      <div>
        <S.Name>{name}</S.Name>
        <S.PlanValue>{planValue}</S.PlanValue>
        {planAdvice && <S.PlanAdvice>{planAdvice}</S.PlanAdvice>}
      </div>
    </S.Wrapper>
  )
}

export default PlanCard
