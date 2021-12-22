import React, { useEffect, useState } from 'react';

export default function useOnScreen (ref: React.MutableRefObject<Element | null>): boolean {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    if (ref !== null && ref.current !== null) {
      observer.observe(ref.current);
    }
    return (): void => { observer.disconnect(); };
  }, []);

  return isIntersecting;
}
