import { useState, useEffect, MutableRefObject, Dispatch, SetStateAction } from 'react';

type ReturnTuple = [isActive: boolean, setIsActive: Dispatch<SetStateAction<boolean>>];

export function useDetectOutsideClick(
  element: MutableRefObject<any>,
  initialState: boolean
): ReturnTuple {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (event: globalThis.MouseEvent) => {
      if (element.current !== null && !element.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    if (isActive) window.addEventListener('click', (event) => pageClickEvent(event));

    return () => {
      window.removeEventListener('click', (event) => pageClickEvent(event));
    };
  }, [isActive, element]);

  return [isActive, setIsActive];
}
