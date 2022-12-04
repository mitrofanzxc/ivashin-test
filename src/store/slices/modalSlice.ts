import { createSlice } from '@reduxjs/toolkit';
import { IModalState } from 'interfaces';

const initialState: IModalState = {
  isModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    // Открыть модельное окно
    openModal: (state) => {
      state.isModalOpen = true;
    },
    // Закрыть модельное окно
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
