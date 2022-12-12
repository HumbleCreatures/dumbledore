import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs';

type TodoInput = {
    title: string;
    description: string;
}

type Todo = {
    id: string;
    title: string;
    description: string;
    created: Date;
}

type TodoState = {
    todos: Todo[]
}

const initialState: TodoState = { todos: []};

const fetchTodos = createAsyncThunk(
    'todo/all',
    // if you type your function argument here
    async () => {
      const response = await fetch(`http://localhost:3333/api/todo/all`)
      return (await response.json()) as Todo[]
    }
  ) 


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoInput>) => {
        console.log('add todo');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action:PayloadAction<Todo[]>) => {
        state.todos = action.payload;
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
      return state;
    })
  },
})

export const { addTodo } = todoSlice.actions