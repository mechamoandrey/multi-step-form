import Image from 'next/image'
import * as S from './styles'

export type PlanCardProps = {
  name: string
  planValue: string
  icon: string
  marked?: 'active' | false
  alt?: string
  isYearly: Boolean
  onClick: Function
}

const PlanCard = ({
  name,
  planValue,
  icon,
  marked,
  alt = '',
  isYearly = false,
  onClick,
}: PlanCardProps) => {
  return (
    <S.Wrapper onClick={() => onClick()} marked={marked}>
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
        <S.PlanValue>
          ${planValue}
          {isYearly ? '0/yr' : '/mo'}
        </S.PlanValue>
        {isYearly && <S.PlanAdvice>2 months free</S.PlanAdvice>}
      </div>
    </S.Wrapper>
  )
}

export default PlanCard
