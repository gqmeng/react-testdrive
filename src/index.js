import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { fetchFHIRResources } from './app/actions'
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

store.dispatch(fetchFHIRResources())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();