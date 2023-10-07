import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "@emotion/react";

import { theme } from "./common/styles/theme";
import { store } from "./services/store";
import AppRoute from "./common/Route";

function App() {
  const custom_theme = theme;
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={custom_theme}>
        <AppRoute />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
