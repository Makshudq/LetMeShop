import { configureStore } from "@reduxjs/toolkit";
import Slicecart from "./Slicecart";

const store = configureStore({
  reducer: {
    cart: Slicecart,
  },
});

export default store;
