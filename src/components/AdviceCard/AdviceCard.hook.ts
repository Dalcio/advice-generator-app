import { useLayoutEffect, useState } from 'react';

const APP_NAME = 'advice-generator-app';

export default function useAdvice<Advice = {}>() {
  const [advice, setAdvice] = useState<Advice>();

  const generateNewAdvice = async () => {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const { slip: data } = await res.json();

      setAdvice(data as Advice);

      localStorage.setItem(APP_NAME, JSON.stringify(data));
    } catch {
      setAdvice({ id: 206, advice: "Don't waste food." } as Advice);
    }
  };

  useLayoutEffect(() => {
    if (!advice) {
      const data = localStorage.getItem(APP_NAME);

      if (data) {
        setAdvice(JSON.parse(data) as Advice);
      } else {
        generateNewAdvice();
      }
    }
  }, []);

  return {
    advice,
    generateNewAdvice,
  };
}
