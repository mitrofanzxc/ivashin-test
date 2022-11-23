import { useEffect } from 'react';
import { useAppSelector } from 'store';

const useSetLocalStorageTags = () => {
  const { tags } = useAppSelector(({ filter }) => filter);

  useEffect(() => {
    localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);
};

export { useSetLocalStorageTags };
