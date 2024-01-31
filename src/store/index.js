import { configureStore } from "@reduxjs/toolkit";
import trainer from './states-slices/trainer.state.js';

const store = configureStore({
    reducer: {
      trainer
    }
  })

export default store