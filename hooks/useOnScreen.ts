import { MutableRefObject, RefObject, useEffect, useState } from 'react';

export default function useOnScreen(ref?: MutableRefObject<any>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsVisible(entry.isIntersecting),
    );
    if (ref && ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return isVisible;
}
