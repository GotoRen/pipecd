import { useEffect, useRef } from "react";

export function useInterval(callback: Function, delay: number | null): void {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => {
        savedCallback.current && savedCallback.current();
      }, delay);
      return (): void => {
        clearInterval(id);
      };
    }
    return;
  }, [delay]);
}
