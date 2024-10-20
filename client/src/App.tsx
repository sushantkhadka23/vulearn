import { Provider } from "react-redux";

import AppRouter from "./router/router";
import { store } from "./states/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />

    </Provider>
  );
}
