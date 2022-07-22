import { useEffect } from 'react';

export function useKeyboardAndMouse(callback, dependencies = [], event = 'keyup') {
  useEffect(() => {
    document.addEventListener(event, callback);

    return () => {
      document.removeEventListener(event, callback);
    };
  }, [dependencies, event, callback]);
}
