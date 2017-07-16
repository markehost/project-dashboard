import { Action } from "../actions";
import { Store } from "../store";
import { INCREMENT_COUNTER, RESET_COUNTER } from "../constants";

const initialState: Store.Counter = {
  value: 0,
};

/* Notice that we are only dealing with a slice of store (Counter)
   and the reducer returns only that slice
   We're expecting the same type coming in and out of this reducer, and
   a specific Action that we defined and imported */
function filters(state: Store.Counter = initialState, action: Action): Store.Counter {
  const { value } = state;

  switch (action.type) {
    case INCREMENT_COUNTER:
      const newValue = value + action.delta;
      return { value: newValue };
    case RESET_COUNTER:
      return { value: 0 };
  }

  return state;
}

export default filters;
