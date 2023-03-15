import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root", // inserisci "root" per salvare l'intero store
  storage,
  transforms: [
    encryptTransform({
      secretKey: "SUPER_SECRET_KEY",
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};

const rootReducer = combineReducers({
  dashboard: mainReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

export const persistor = persistStore(store);
