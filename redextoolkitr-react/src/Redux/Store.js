import {configureStore} from '@reduxjs/toolkit';
import { Counterslice } from "./Slice/Counter";
export const reduxstore = configureStore({
    reducer:{
        counter: Counterslice.reducer,
    },
})
