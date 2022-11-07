import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';

export default configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    // needs to be specified for every reducer thats created
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware), //just add reducer being used
});
// passed store variable through provider in index.js
