import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
        main: "#1bb193"
    },
    secondary: {
        main: "#f0f0f0"
    }
  }        
});

ReactDOM.render(
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </Provider>,
   document.getElementById('root')
);

serviceWorker.unregister();
