import React from "react";
import { Provider } from "react-redux";
// import { ConnectedRouter } from "connected-react-router";
import store from './store/store';
import MyRouter from "./routes/Router";


const App = () => {

  
  return (
    <Provider store={store}>
      {/* <ConnectedRouter> */}
        <MyRouter />
      {/* </ConnectedRouter> */}
    </Provider>
  );
}

export default App;


//      <ConnectedRouter history={history}>