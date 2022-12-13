import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { login } from './loginSlice';

type CaseInput = {
    title: string;
    description: string;
}

type Case = CaseInput & {
    id: string;
    created: Date;
}

type CaseState = {
    cases: Case[],
    loadingDataFromServer: boolean
}

const initialState: CaseState = { cases: [], loadingDataFromServer: false};



export const caseSlice = createSlice({
  name: 'case',
  initialState,
  reducers: {
    addMyCase: (state, action: PayloadAction<CaseInput>) => {
      state.cases = [...state.cases, {...action.payload, id: '123', created: new Date() }]
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCases.fulfilled, (state, {payload}) => {
      state.cases = payload
      state.loadingDataFromServer = false;
      return state;
    })

    builder.addCase(fetchCases.pending, (state, action) => {
      state.loadingDataFromServer = true;
      return state;
    })

    builder.addCase(login, (state, action) => {
      console.log('do something when user login');
      state.cases = [];
      return state;
    })
  },
})

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


export const { addMyCase } = caseSlice.actions
