import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants/theme";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(  
/*   <React.StrictMode> */
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
         <Provider store={store}> 
          <App />
         </Provider> 
      </ThemeProvider>
    </BrowserRouter>
 /*  </React.StrictMode> */
);
