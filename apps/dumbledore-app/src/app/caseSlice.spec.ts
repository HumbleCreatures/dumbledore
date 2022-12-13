import { caseSlice } from "./caseSlice"

describe('reducer test', () => {
    it('test', () => {
        const reducer = caseSlice.reducer;
        const resultState = reducer(state, action);
    })
})