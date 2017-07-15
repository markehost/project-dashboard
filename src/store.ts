export namespace Store {

  export type Counter = { value: number };

  export type All = {
    counter: Counter,
    isSaving: boolean,
    isLoading: boolean,
    error: string,
  };
}
