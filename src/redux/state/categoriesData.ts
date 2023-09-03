import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store/store';

export interface Category {
  id: number;
  name: string;
  isActive: boolean;
}

export interface CategoriesState {
  categories: Category[];
}

const initialState: CategoriesState = {
  categories: [
    {
      id: 0,
      name: 'All',
      isActive: true,
    },
    {
      id: 1,
      name: 'Important',
      isActive: false,
    },
    {
      id: 2,
      name: 'Lecture notes',
      isActive: false,
    },
    {
      id: 3,
      name: 'To-do lists',
      isActive: false,
    },
    {
      id: 4,
      name: 'Shopping list',
      isActive: false,
    },
  ],
};

const Categories = createSlice({
  name: 'categoriesData',
  initialState,
  reducers: {
    setCategories: (state: RootState, action: PayloadAction<number>) => {
      state.categories.forEach((category: Category) => {
        category.isActive = category.id === action.payload;
      });
    },
  },
});

export const {setCategories} = Categories.actions;
export const _getCategories = (state: RootState) => state.categoriesData;
export default Categories.reducer;
