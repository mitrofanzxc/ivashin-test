import { useEffect } from 'react';
import { useAppSelector } from 'store';
import { RootState } from '../store/store';

const useSetLocalStorage = (key: keyof RootState) => {
  const { data } = useAppSelector((store) => store[key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
};

export { useSetLocalStorage };
