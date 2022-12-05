import { FC, useRef, ChangeEvent, useEffect } from 'react';
import { useAppDispatch, addValueToNote, addTagToNote } from 'store';
import { useFocus } from 'hooks';
import { applyHighlights } from 'utils';
import { ITextarea } from 'interfaces';
import { regex } from '../../constants';
import './style.scss';

const Textarea: FC<ITextarea> = ({
  note,
  handleInitialTextareaValue,
  handleCurrentTextareaValue,
}) => {
  const highlights = useRef<HTMLDivElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  // Обработчик для динамического добавления тега к заметке
  const validateTag = (value: string, condition: RegExp) => {
    const tags = value.match(condition);

    if (tags) {
      if (note) {
        dispatch(addTagToNote({ id: note.id, tags }));
      }
    }
  };

  // Обработчик для подсвечивания совпадений
  const handleApplyHighlights = (value: string) => {
    const highlightedText = applyHighlights(value, regex);

    if (highlights.current) {
      highlights.current.innerHTML = highlightedText;
    }
  };

  // Обработчик для textarea
  const handleTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement;
    const { value } = target;
    validateTag(value, regex);
    handleApplyHighlights(value);
    handleCurrentTextareaValue(value);

    if (note) {
      dispatch(addValueToNote({ id: note.id, value }));
    }
  };

  // При первой загрузке - подсветить все совпадения и установить начальное значение
  useEffect(() => {
    if (textarea.current) {
      handleInitialTextareaValue(textarea.current.value);
      handleCurrentTextareaValue(textarea.current.value);
      handleApplyHighlights(textarea.current.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
