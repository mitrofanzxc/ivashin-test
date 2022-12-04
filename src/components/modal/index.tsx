import { FC } from 'react';
import {
  useAppSelector,
  useAppDispatch,
  closeModal,
  removeTagFromFilter,
  removeTagFromFilterTagArray,
  filterNotes,
} from 'store';
import { useBodyOverflow } from 'hooks';
import { filterData } from 'utils';
import { Button } from 'components';
import './style.scss';

const Modal: FC = () => {
  const { isModalOpen, data: modalData } = useAppSelector(({ modal }) => modal);
  const { data: notesData } = useAppSelector(({ notes }) => notes);
  const { data: filterTagArray } = useAppSelector(({ filter }) => filter);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSubmit = (value: string) => {
    switch (value) {
      case 'Yes':
        dispatch(removeTagFromFilter(modalData));
        dispatch(removeTagFromFilterTagArray(modalData));
        dispatch(filterNotes(filterData(filterTagArray, notesData)));
        handleCloseModal();
        break;
      case 'No':
        handleCloseModal();
        break;
      default:
        handleCloseModal();
        break;
    }
  };

  useBodyOverflow();

  return (
    <>
      <div className={`modal box-shadow ${!isModalOpen ? 'display_none' : ''}`}>
        <h2 className="h2">Are you sure you want to delete this?</h2>
        <div className="display_flex ai-center jc-center gap-2">
          <Button
            textContent="Yes"
            className="w-100 pa-3 bg-red fw-medium"
            onClick={() => handleSubmit('Yes')}
          />
          <Button
            textContent="No"
            className="w-100 pa-3 bg-green fw-medium"
            onClick={() => handleSubmit('No')}
          />
        </div>
        <Button icon="close" onClick={handleCloseModal} />
      </div>
      <div
        className={`shadow ${!isModalOpen ? 'display_none' : ''}`}
        onClick={handleCloseModal}
        role="button"
        aria-label="Shadow area to close the modal window"
        tabIndex="-1"
      />
    </>
  );
};

export { Modal };
