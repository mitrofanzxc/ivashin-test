import { FC, useRef, ChangeEvent, useEffect } from 'react';
import { useAppDispatch, addValueToNote, addTagToNote } from 'store';
import { useFocus } from 'hooks';
import { applyHighlights } from 'utils';
import { ITextarea } from 'interfaces';
import { regex } from '../../constants';
import './style.scss';

const Textarea: FC<ITextarea> = ({ note }) => {
  const highlights = useRef<HTMLDivElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  const validateTag = (value: string, condition: RegExp) => {
    const tags = value.match(condition);

    if (tags) {
      if (note) {
        dispatch(addTagToNote({ id: note.id, tags }));
      }
    }
  };

  const handleApplyHighlights = (value: string) => {
    const highlightedText = applyHighlights(value, regex);

    if (highlights.current) {
      highlights.current.innerHTML = highlightedText;
    }
  };

  const handleTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement;
    const { value } = target;
    validateTag(value, regex);
    handleApplyHighlights(value);

    if (note) {
      dispatch(addValueToNote({ id: note.id, value }));
    }
  };

  useEffect(() => {
    if (textarea.current) {
      handleApplyHighlights(textarea.current.value);
    }
  }, []);

  useFocus(textarea);

  return (
    <div className="container mr-auto mb-2 ml-auto">
      <div className="backdrop">
        <div className="highlights pa-4" ref={highlights} />
      </div>
      <textarea
        className="textarea box-shadow pa-4"
        placeholder="Type something..."
        autoComplete="off"
        value={note ? note.value : ''}
        onChange={handleTextarea}
        ref={textarea}
      />
    </div>
  );
};

export { Textarea };
