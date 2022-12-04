import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IModalData, IModalState } from 'interfaces';

const initialState: IModalState = {
  isModalOpen: false,
  data: {
    type: '',
    value: '',
  },
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
    // Получение данных в модальное окно
    addDataToModal: (state, action: PayloadAction<IModalData>) => {
      state.data = action.payload;
    },
  },
});

export const { openModal, closeModal, addDataToModal } = modalSlice.actions;
export default modalSlice.reducer;
