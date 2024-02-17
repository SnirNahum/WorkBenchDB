export const SET_WORKBENCHDB_PROMPT = 'SET_WORKBENCHDB_PROMPT';
export const SET_PRODUCT = 'SET_PRODUCT';

const initialState = {
  workBenchDBPrompt: null,
  product: null,
};
export function workBenchDBReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_WORKBENCHDB_PROMPT:
      return {
        ...state,
        workBenchDBPrompt: action.prompt,
      };
    case SET_PRODUCT:
      return {
        ...state,
        product: action.product
      }
    default:
      return state;
  }
}

