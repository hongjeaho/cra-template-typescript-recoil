import { combineReducers, configureStore } from '@reduxjs/toolkit'
import customer from '@/features/stores/customer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'

const persisConfig = {
  key: 'root',
  storage,
  whitelist: ['customer'],
}

const rootReducer = combineReducers({
  customer,
})

const persistedReducer = persistReducer(persisConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: defaultMiddleware =>
    defaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
export const persistore = persistStore(store)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
