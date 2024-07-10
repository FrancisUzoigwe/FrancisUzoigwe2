import { RouterProvider } from "react-router-dom"
import { mainRoute } from "./routes/mainRoute"
import { Provider } from "react-redux"
import { store } from "./global/store"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import RefreshPage from "./utils/RefreshPage"

const App = () => {
  const persistor = persistStore(store)
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<RefreshPage />}>
          <RouterProvider router={mainRoute} />
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App