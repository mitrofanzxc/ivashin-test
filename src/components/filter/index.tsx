import { ChangeEvent, FC, useState } from 'react';
import { useAppSelector, useAppDispatch, toggleFilterInput, closeFilterInput } from 'store';
import { Button } from 'components';
import './style.scss';

const Filter: FC = () => {
  const { isOpen } = useAppSelector(({ filter }) => filter);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;
    setInputValue(value);
  };

  return (
    <aside className="filter box-shadow pa-2">
      <div className="filter__header mb-2 pb-2">
        <h2>Filter</h2>
        <Button icon="plus" isOpen={isOpen} onClick={() => dispatch(toggleFilterInput())} />
      </div>
      <div className={`input-wrapper ${isOpen ? 'input-wrapper_active' : ''}`}>
        <input
          className="input box-shadow pl-2"
          type="text"
          name=""
          id=""
          placeholder="Enter tag name"
          value={inputValue}
          onChange={handleInput}
        />
        <Button icon="save" onClick={() => dispatch(closeFilterInput())} />
      </div>
    </aside>
  );
};

export { Filter };
