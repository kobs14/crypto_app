import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
    reducer: {
      [cryptoApi.reducerPath]: cryptoApi.reducer,
      [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },
    // need to modify to booth reducers
    middleware: (getDefualtMiddleware) => {
      return getDefualtMiddleware().concat(cryptoApi.middleware);
    },
  });