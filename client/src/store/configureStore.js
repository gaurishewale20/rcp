import { createStore, compose, applyMiddleware } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const middleware = [thunk];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

//   if (module.hot) {
//     module.hot.accept("../reducers", () => {
//       const nextRootReducer = require("../reducers").default;
//       store.replaceReducer(nextRootReducer);
//     });
//   }

  return store;
}