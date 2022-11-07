import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    // needs to be specified for every reducer thats created
  },
});
// passed store variable through provider in index.js