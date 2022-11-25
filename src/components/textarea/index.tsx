import { FC, useEffect, useRef, ChangeEvent } from 'react';
import { useAppDispatch, addValueToNote, addTagToNote } from 'store';
import { ITextarea } from 'interfaces';
import './style.scss';

const Textarea: FC<ITextarea> = ({ note }) => {
  const textarea = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  const validateTag = (value: string) => {
    const regex = /#\b[^#\s]*\b/gim;
    const arr = value.match(regex);

    if (arr) {
      if (note) {
        dispatch(addTagToNote({ id: note.id, tags: arr }));
      }
    }
  };

  const handleTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement;
    const { value } = target;
    validateTag(value);

    if (note) {
      dispatch(addValueToNote({ id: note.id, value }));
    }
  };

  useEffect(() => {
    if (textarea.current) {
      const maxRange = textarea.current.value.length;
      textarea.current.setSelectionRange(maxRange, maxRange);
      textarea.current.focus();
    }
  }, []);

  return (
    <textarea
      className="textarea box-shadow pa-4"
      placeholder="Type something..."
      autoComplete="off"
      value={note ? note.value : ''}
      onChange={handleTextarea}
      ref={textarea}
    />
  );
};

export { Textarea };
