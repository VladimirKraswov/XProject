import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import type {IStoreReducers} from '@store';

interface ITestSlice {
  testData: string;
}

const initialState: ITestSlice = {
  testData: 'tests',
};

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    changeTestData: (state: ITestSlice, action: PayloadAction<string>) => {
      state.testData = action.payload;
    },
  },
});

const getTestData = (state: IStoreReducers): string => {
  return state.testSlice.testData;
};

export const {changeTestData} = testSlice.actions;
export {testSlice, getTestData};
export type {ITestSlice};
