import { useEffect, RefObject } from 'react';

const useFocus = (ref: RefObject<HTMLTextAreaElement>) => {
  useEffect(() => {
    if (ref.current) {
      const maxRange = ref.current.value.length;
      ref.current.setSelectionRange(maxRange, maxRange);
      ref.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export { useFocus };
