import {
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { workBenchDBReducer } from "./reducers/workBenchDB.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  workBenchDBModule: workBenchDBReducer,
});


export const store = createStore(rootReducer, composeEnhancers());

window.gStore = store;
