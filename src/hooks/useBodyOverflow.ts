import { useEffect } from 'react';
import { useAppSelector } from 'store';

const useBodyOverflow = () => {
  const { isModalOpen } = useAppSelector(({ modal }) => modal);

  useEffect(() => {
    const BODY = document.querySelector('body') as HTMLBodyElement;

    if (isModalOpen) {
      BODY.classList.add('body_overflow');
    } else {
      BODY.classList.remove('body_overflow');
    }
  }, [isModalOpen]);
};

export { useBodyOverflow };
