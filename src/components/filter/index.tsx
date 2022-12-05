import { FC, useState, ChangeEvent, KeyboardEvent } from 'react';
import {
  useAppSelector,
  useAppDispatch,
  toggleTagInput,
  closeTagInput,
  addTagToFilter,
} from 'store';
import { Button, TagList } from 'components';
import './style.scss';

const Filter: FC = () => {
  const { isInputOpen } = useAppSelector(({ tags }) => tags);
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState<string>('');
  const [inputError, setInputError] = useState<string>('');

  // Переключатель для поля ввода
  const handleToggleTagInput = () => {
    setInputError('');
    dispatch(toggleTagInput());
  };

  // Обработчик для поля ввода
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;
    setInputValue(value);

    if (value) {
      setInputError('');
    }
  };

  // Добавление тега по клику на кнопку
  const handleAddTag = () => {
    if (inputValue) {
      dispatch(addTagToFilter(`#${inputValue}`));
      dispatch(closeTagInput());
      setInputValue('');
    } else {
      setInputError('Error: Enter tag name');
    }
  };

  // Добавление тега по нажатию на Enter
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTag();
    }
  };

  return (
    <aside className="filter box-shadow pa-2">
      <div className="filter__header mb-5 pb-2">
        <h2 className="h2">Tags</h2>
        <Button icon="plus" isInputOpen={isInputOpen} onClick={handleToggleTagInput} />
      </div>
      <div className={`input-wrapper mb-2 ${isInputOpen ? 'input-wrapper_active' : ''}`}>
        <input
          className="input box-shadow pl-2"
          type="text"
          name=""
          id=""
          placeholder="Enter tag name"
          value={inputValue}
          onChange={handleInput}
          onKeyDown={onKeyDown}
        />
        <Button icon="save" onClick={handleAddTag} />
      </div>
      {inputError && <h4 className="h4 mb-2 fs-xs fw-medium color-red">{inputError}</h4>}
      <TagList />
    </aside>
  );
};

export { Filter };
