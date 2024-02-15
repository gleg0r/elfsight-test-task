import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./getDataSlice";
//import { setCharacterReducer, getCharacterReducer } from "./getDataSlice";

export default configureStore({
    reducer: {
        getData: getDataReducer,
    }
})