import { createSlice } from "@reduxjs/toolkit";


const inatial = {
    catagary:'All',
}
export const catagarySlice = createSlice(
    {
    name:"catagary",
    initialState:inatial,
    reducers:{ 
        //  selectVideo :(state)=>(
        //     state.catagary = "Video"        
        //  ),
       
        selectCategories:(state,actions)=>{
          state.catagary = actions.payload      
        }
   
       },    
    }


)
export const {selectCategories  } = catagarySlice.actions;
export default catagarySlice.reducer;