import { useEffect } from 'react';
import { useAppSelector } from 'store';

const useSetLocalStorageTags = () => {
  const { data } = useAppSelector(({ tags }) => tags);

  useEffect(() => {
    localStorage.setItem('tags', JSON.stringify(data));
  }, [data]);
};

export { useSetLocalStorageTags };
