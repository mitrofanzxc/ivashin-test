import { FC, useState, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector, addTag } from 'store';
import './style.scss';

const Textarea: FC = () => {
  const { data } = useAppSelector(({ tags }) => tags);
  const dispatch = useAppDispatch();

  const [textareaValue, setTextareaValue] = useState<string>('');

  const validate = (value: string) => {
    const regex = /#\b[^#\s]*\b/gim;
    console.log(value.match(regex));
  };

  const handleTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement;
    const { value } = target;
    setTextareaValue(value);
    validate(value);
  };

  return (
    <textarea
      className="textarea box-shadow pa-4"
      name=""
      id=""
      placeholder="Type something..."
      autoComplete="off"
      autoFocus={true}
      value={textareaValue}
      onChange={handleTextarea}
    />
  );
};

export { Textarea };
