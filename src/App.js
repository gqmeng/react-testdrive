import React , { useEffect} from 'react';
import { StylesProvider } from "@material-ui/core/styles";
import { useSelector} from 'react-redux';
import store from './app/store';
import {fetchFHIRResources} from './app/actions'
import { Calculator } from './features/Calculator';
import { InfoPanel } from './features/InfoPanel';
import './App.css';

function App() {
  const isLoading = useSelector(state=>state.uiReducers.status.isLoading)
  useEffect(()=>{store.dispatch(fetchFHIRResources())}, []);
  return (
    <StylesProvider injectFirst>
      <div className="App">
        <header className="App-header">
          <div id="app-title">Creatinine Clearance Calculator</div>
          <InfoPanel />
          {!isLoading && <Calculator /> }
        </header>
      </div>
      </StylesProvider>
  );
}

export default App;
