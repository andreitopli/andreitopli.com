import { useEffect, useState } from 'react';

const browserPreference = '(prefers-reduced-motion: no-preference)';
const isBrowser = typeof window === 'undefined';

export function useMousePosition(deps: unknown[] = []) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(
    isBrowser || !window.matchMedia(browserPreference).matches,
  );

  useEffect(() => {
    const queryList = window.matchMedia(browserPreference);

    const onPreferenceChange = (event: MediaQueryListEvent) => {
      setReducedMotion(!event.matches);
    };

    queryList.addEventListener('change', onPreferenceChange);

    const handlePosition = (event: MouseEvent) => {
      if (!reducedMotion) {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }
    };

    window.addEventListener('mousemove', handlePosition);

    return () => {
      window.removeEventListener('mousemove', handlePosition);
      queryList.removeEventListener('change', onPreferenceChange);
    };
  }, deps);

  return mousePosition;
}
