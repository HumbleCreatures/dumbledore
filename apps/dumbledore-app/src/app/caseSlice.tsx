import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { login } from './loginSlice';

type CaseInput = {
    title: string;
    description: string;
}

type Case = {
    id: string;
    title: string;
    description: string;
    created: Date;
}

type CaseState = {
    cases: Case[]
}

const initialState: CaseState = { cases: []};

export const fetchCases = createAsyncThunk<
  Case[],
  number,
  { rejectValue: string }
>(
  "case/fetchAll", 
  async (limit: number, thunkApi) => {
    const response = await fetch(`http://localhost:3333/api/case/all`)
    
    if (response.status !== 200) {
      return thunkApi.rejectWithValue("Failed to fetch cases.");
    }
    const data: Case[] = await response.json();
    return data.slice(0, limit);
  }
);


export const caseSlice = createSlice({
  name: 'case',
  initialState,
  reducers: {
    addCase: (state, action: PayloadAction<CaseInput>) => {
        console.log('add case');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCases.fulfilled, (state, {payload}) => {
      state.cases = payload
      return state;
    })
    builder.addCase(login, (state, action) => {
      console.log('do something when user login');
    })
  },
})

export const { addCase } = caseSlice.actions
