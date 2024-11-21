import { createSlice } from "@reduxjs/toolkit";


type LevelState = {
    currentLevel:number;
};


const initialState:LevelState ={
    currentLevel:1,
};


const levelSlice = createSlice({
    name:"level",
    initialState,
    reducers:{},
});

export default levelSlice.reducer;