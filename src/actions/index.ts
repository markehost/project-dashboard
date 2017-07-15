/* redeclare Action as a union of explicit types
   that each implement redux�s interface

   We�re using type (rather than interface) to close Action for extension
* */
import { INCREMENT_COUNTER, RESET_COUNTER } from "../constants";

export type Action = {
  type: INCREMENT_COUNTER,
  delta: number,
} | {
  type: RESET_COUNTER,
};

/*
  eventually we will need to split actions and types into separate modules
  as the app grows
* */
export const incrementCounter = (delta: number): Action => ({
  delta,
  type: INCREMENT_COUNTER,
});

export const resetCounter = (): Action => ({
  type: RESET_COUNTER,
});
