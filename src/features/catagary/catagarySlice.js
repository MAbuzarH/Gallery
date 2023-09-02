import { createSlice } from "@reduxjs/toolkit";
const inatial = {
    catagary:''
}
export const catagarySlice = createSlice(
    {
    name:"catagary",
    initialState:inatial,
    reducers:{
        // decrement: (state) => {
         
        //     state.catagary -= 1
        //   },
        // incerment: (state) => {
        //     state.catagary += 1
        //   },
        // selectAll :(state)=>(
        //     state.catagary = "All"        
        //  ),
        //  selectPhoto :(state)=>(
        //     state.catagary = "Photo"        
        //  ),
        //  selectVideo :(state)=>(
        //     state.catagary = "Video"        
        //  ),
       
        selectCategories:(state,actions)=>{
(state.catagary = actions.payload )
        }
        },    
    }


)
export const {selectCategories,selectAll,selectPhoto,selectVideo,incerment,decrement  } = catagarySlice.actions;
export default catagarySlice.reducer;