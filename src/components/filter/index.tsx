import { FC, useState, ChangeEvent } from 'react';
import {
  useAppSelector,
  useAppDispatch,
  toggleTagInput,
  closeTagInput,
  addTagToFilter,
} from 'store';
import { Button, TagList } from 'components';
import { v4 as uuidv4 } from 'uuid';
import './style.scss';

const Filter: FC = () => {
  const { isInputOpen } = useAppSelector(({ tags }) => tags);
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState<string>('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;
    setInputValue(value);
  };

  const handleAddTag = () => {
    if (inputValue) {
      dispatch(addTagToFilter({ id: uuidv4(), value: inputValue }));
      dispatch(closeTagInput());
      setInputValue('');
    }
  };

  return (
    <aside className="filter box-shadow pa-2">
      <div className="filter__header mb-5 pb-2">
        <h2>Tags</h2>
        <Button icon="plus" isInputOpen={isInputOpen} onClick={() => dispatch(toggleTagInput())} />
      </div>
      <div className={`input-wrapper mb-5 ${isInputOpen ? 'input-wrapper_active' : ''}`}>
        <input
          className="input box-shadow pl-2"
          type="text"
          name=""
          id=""
          placeholder="Enter tag name"
          value={inputValue}
          onChange={handleInput}
        />
        <Button icon="save" onClick={handleAddTag} />
      </div>
      <TagList />
    </aside>
  );
};

export { Filter };
