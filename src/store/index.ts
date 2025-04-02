import { configureStore } from '@reduxjs/toolkit'
import { produtosApi } from '../services/api'
import carrinhoReducer from '../store/reducer/carrinho'
import favoritosReducer from '../store/reducer/favoritos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [produtosApi.reducerPath]: produtosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
