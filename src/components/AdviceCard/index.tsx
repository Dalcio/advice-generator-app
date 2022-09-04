/* eslint-disable @next/next/no-img-element */
import useAdvice from './AdviceCard.hook';
import { AdviceCardContainer } from './AdviceCard.styles';

const AdviceCad = () => {
  const { advice, generateNewAdvice } = useAdvice();

  return (
    advice && (
      <AdviceCardContainer>
        <div className="advice-number">advice {`#${advice.id}`}</div>
        <div className="advice flex">{`"${advice.advice}"`}</div>
        <picture>
          <source media="min-width: 375px" src="/images/pattern-divider-desktop.svg" />
          <img src="/images/pattern-divider-mobile.svg" alt="" />
        </picture>
        <button type="button" onClick={generateNewAdvice} />
      </AdviceCardContainer>
    )
  );
};

export default AdviceCad;
