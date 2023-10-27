import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'danhsach', 
  initialState: {
    danhsach: [],
  },
  reducers: {
    add: (state, action) => {
      state.danhsach = [...state.danhsach, action.payload]; 
    },
    del: (state, action) => {
      state.danhsach = state.danhsach.filter((task) => task !== action.payload);
    },
  },
});

export const { add, del } = taskSlice.actions;

export default taskSlice.reducer;



function tesst()
{
  const tam = createSlice({
    initialState: {
      name: ten,
    },
    reducer: {
      
    }
  })
}