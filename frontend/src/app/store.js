import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { cryptoProfileApi } from '../services/cryptoProfileApi';
import { cryptoAuthApi } from '../services/authControllerApi';

import authReducer from "../services/slices/auth";
import messageReducer from "../services/slices/message";

export default configureStore({
    reducer: {
      [cryptoApi.reducerPath]: cryptoApi.reducer,
      [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
      [cryptoProfileApi.reducerPath]: cryptoProfileApi.reducer,
      [cryptoAuthApi.reducerPath]: cryptoAuthApi.reducer,
      auth: authReducer,
      message: messageReducer,
    },
    // need to modify to booth reducers
    middleware: (getDefualtMiddleware) => getDefualtMiddleware().concat(cryptoAuthApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  });


// import authReducer from "./slices/auth";
// import messageReducer from "./slices/message";
// const reducer = {
//   auth: authReducer,
//   message: messageReducer
// }
// const store = configureStore({
//   reducer: reducer,
//   devTools: true,
// })