import { useEffect } from 'react';
import { useAppSelector } from 'store';

const useSetLocalStorageNotes = () => {
  const { data } = useAppSelector(({ notes }) => notes);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(data));
  }, [data]);
};

export { useSetLocalStorageNotes };
