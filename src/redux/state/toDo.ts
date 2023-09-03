import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store/store';

interface ToDoItem {
  id: string;
  content: string;
  title: string;
  isCompleted: boolean;
  bgColor: string;
  textColor: string;
  category: string;
  isVisible: boolean;
}

interface ToDoList {
  todos: ToDoItem[];
  activeCategory: string;
}

const initialState: ToDoList = {
  todos: [
    {
      id: '1',
      content:
        'test content test content test content test content test content test content ',
      title: 'test title',
      isCompleted: false,
      bgColor: '#D9E8FC',
      textColor: '#131313',
      category: 'All',
      isVisible: true,
    },
    {
      id: '2',
      content: 'test content 2',
      title: 'test title 2',
      isCompleted: false,
      bgColor: '#FFD8F4',
      textColor: '#131313',
      category: 'Important',
      isVisible: true,
    },
    {
      id: '3',
      content: 'test content 3',
      title: 'test title 3',
      isCompleted: false,
      bgColor: '#D9E8FC',
      textColor: '#131313',
      category: 'Important',
      isVisible: true,
    },
    {
      id: '4',
      content:
        'test content 4 test content 4 test content 4 test content 4 test content 4 ',
      title: 'test title 4',
      isCompleted: false,
      bgColor: '#FFD8F4',
      textColor: '#131313',
      category: 'Important',
      isVisible: true,
    },
  ],
  activeCategory: 'All',
};

const ToDosSlice = createSlice({
  name: 'ToDos',
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<ToDoItem>) => {
      state.todos.push(action.payload);
    },

    setStatus: (state, action: PayloadAction<string>) => {
      state.todos.forEach((toDo: ToDoItem) => {
        if (toDo.id === action.payload) {
          toDo.isCompleted = !toDo.isCompleted;
        }
      });
    },

    setIsVisible: (state, action: PayloadAction<string>) => {
      state.todos.forEach((toDo: ToDoItem) => {
        if (toDo.id === action.payload) {
          toDo.isVisible = !toDo.isVisible;
        }
      });
    },

    setActiveCategories: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },

    deleteToDo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((toDo: ToDoItem) => {
        if (toDo.id !== action.payload) {
          return toDo;
        }
      });
    },
  },
});

export const {
  addToDo,
  setStatus,
  setIsVisible,
  deleteToDo,
  setActiveCategories,
} = ToDosSlice.actions;
export const _getTodos = (state: RootState) => {
  return state.ToDos.todos.filter((todo: ToDoItem) => {
    if (state.ToDos.activeCategory === 'All') {
      return todo;
    } else if (state.ToDos.activeCategory === todo.category) {
      return todo;
    }
  });
};

export const _getActiveCategory = (state: RootState) =>
  state.ToDos.activeCategory;

export const _getCategories = (state: RootState) => {
  const tempCategories: string[] = [];
  state.ToDos.todos.map((todo: ToDoItem) => {
    if (tempCategories.toString().indexOf(todo.category) === -1) {
      tempCategories.push(todo.category);
    }
  });
  return tempCategories;
};

export default ToDosSlice.reducer;
