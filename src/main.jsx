import React from "react";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import ReactDOM from "react-dom/client";
import { Details} from "./pages/Details";
import { SignUp} from "./pages/SignUp";
import { Home} from "./pages/Home";
import { SignIn} from "./pages/SignIn";
import { New} from "./pages/New";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <New />
    </ThemeProvider>
  </React.StrictMode>
);
