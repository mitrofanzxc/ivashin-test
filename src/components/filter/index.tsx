import { ChangeEvent, FC, useState } from 'react';
import { useAppSelector, useAppDispatch, toggleFilterInput, closeFilterInput, addTag } from 'store';
import { Button } from 'components';
import { v4 as uuidv4 } from 'uuid';
import './style.scss';

const Filter: FC = () => {
  const { isOpen, data } = useAppSelector(({ filter }) => filter);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;
    setInputValue(value);
  };

  const handleAddTag = () => {
    dispatch(addTag({ id: uuidv4(), value: inputValue }));
    dispatch(closeFilterInput());
    setInputValue('');
  };

  return (
    <aside className="filter box-shadow pa-2">
      <div className="filter__header mb-2 pb-2">
        <h2>Tags</h2>
        <Button icon="plus" isOpen={isOpen} onClick={() => dispatch(toggleFilterInput())} />
      </div>
      <div className={`input-wrapper mb-2 ${isOpen ? 'input-wrapper_active' : ''}`}>
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
      <ul className="tag-list">
        {/* <li className="tag-list__item box-shadow pa-1">tag11111</li>
        <li className="tag-list__item box-shadow pa-1">tag2</li>
        <li className="tag-list__item box-shadow pa-1">tag3</li>
        <li className="tag-list__item box-shadow pa-1">tag4</li>
        <li className="tag-list__item box-shadow pa-1">tag5</li>
        <li className="tag-list__item box-shadow pa-1">tag6</li>
        <li className="tag-list__item box-shadow pa-1">tag7</li>
        <li className="tag-list__item box-shadow pa-1">tag8</li>
        <li className="tag-list__item box-shadow pa-1">tag9</li> */}
        {data.map(({ id, value }) => {
          return (
            <li key={id} className="tag-list__item box-shadow pa-1">
              {value}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export { Filter };
