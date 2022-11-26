import { FC, useRef, ChangeEvent } from 'react';
import { useAppDispatch, addValueToNote, addTagToNote } from 'store';
import { useFocus } from 'hooks';
import { ITextarea } from 'interfaces';
import './style.scss';

const Textarea: FC<ITextarea> = ({ note }) => {
  const textarea = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  const validateTag = (value: string) => {
    const regex = /#\b[^#\s]*\b/gim;
    const tags = value.match(regex);

    if (tags) {
      if (note) {
        dispatch(addTagToNote({ id: note.id, tags }));
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

  useFocus(textarea);

  return (
    <textarea
      className="textarea box-shadow mb-2 pa-4"
      placeholder="Type something..."
      autoComplete="off"
      value={note ? note.value : ''}
      onChange={handleTextarea}
      ref={textarea}
    />
  );
};

export { Textarea };
