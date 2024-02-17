import { SET_WORKBENCHDB_PROMPT, SET_PRODUCT } from '../reducers/workBenchDB.reducer'; // Correct the path to your reducer
import { store } from '../store'; // Adjust the import for store

export function setWorkBenchDBPrompt(prompt) {
  const action = {
    type: SET_WORKBENCHDB_PROMPT,
    prompt,
  };
  
  store.dispatch(action);
  return action;
}

export function setProduct(product) {
  const action = {
    type: SET_PRODUCT,
    product,
  };
  
  store.dispatch(action);
  return action;
}
