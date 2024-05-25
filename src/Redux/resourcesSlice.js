import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  resourcesData: [{}]
}

export const resourcesSlice = createSlice({
  name: 'Resources',
  initialState,
  reducers: {
    saveResource: (state , action) => {
      state.resourcesData = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveResource } = resourcesSlice.actions

export default resourcesSlice.reducer