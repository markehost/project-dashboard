![logo](./scr/images/logo.png)

## React with Redux written in Typescript

Getting up and running:

`yarn install`

`yarn run start`

To lint: `yarn run lint`

Production build: `yarn run build`



### Redux with Typescript
We are following general Redux/React best practices where we use
react-redux bindings to wrap a component (CounterComponent) with redux connect(), passing
state and eventHandler mappings in it,
instead of creating a smart component by hand using `store.subscribe()`

#### Redux Store
Outlines the shape of our store. It has a counter object, and All which is Counter, two flags, and an error string.
```
  export namespace Store {
     export type Counter = { value: number };
     export type All = {
       counter: Counter,
       isSaving: boolean,
       isLoading: boolean,
       error: string,
     };
   }
 ```

#### Redux Actions
We specify the action to be a union of two possible options:
```
  export type Action = {
     type: "INCREMENT_COUNTER",
     delta: number,
   } | {
     type: "RESET_COUNTER",
   };
```
That is it can either be of INCREMENT_COUNTER with a payload of delta:number, or
it could merely be a RESET_COUNTER with no payload. Then the action creators are just:
```
export const incrementCounter = (delta: number): Action => ({
  delta,
  type: "INCREMENT_COUNTER",
});
```
We also take advantage of Typescript's literal types when we create constants:
```
export type RESET_COUNTER = "RESET_COUNTER";
export const RESET_COUNTER: RESET_COUNTER = "RESET_COUNTER";
```
For each constant, we're defining a type that contains exactly one value: the string constant we're looking for.
We then create an instance of that type. These values have more precise type information than just creating constants.
Constants by themselves had type string, and therefore their use didn't really tell the compiler anything about the contents
of the constant. The new definitions tell the compiler what specific value is allowed there. A function which takes a string can get any string,
but a function which takes an RESET_COUNTER can only get a value equal to 'RESET_COUNTER'.

#### Redux Reducers
What's nice about Typescript typings is that we could tell that Counter Reducer only handles a slice of the store: Store.Counter, and
we know that Counter is an object containing value: number `export type Counter = { value: number };`
Then, we import as many reducers as we have into reducers/index.ts file and use the redux's combineReducers function
to the final combined reducer:
```
export const reducers = combineReducers<Store.All>({
  counter,
})
```
Notice the "shape" of the output: <Store.All>. This is excellent documentation, without writing documentation.

Finally, we create the store in our topmost index.tsx:
```
const store = Redux.createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
```
*The last line is a way to enable the Redux Chrome Dev tools*
And lastly pass the store to the Provider which wraps our component:
```
ReactDOM.render(
    <Provider store={store}>
       <Counter label="a counter" />
    </ Provider>, rootEl);
```

### Build Related:

#### Typescript or Typescript and Babel for transpilation?
We only need Typescript since it can transpile to ES5 as well (in tsonfig.json: `"target": "es5",`)
It is claimed that having Typescript transpile everything including TSX/JSX, it will be a faster process than using both TS and Babel.


#### awesome-typescript-loader vs ts-loader
Notable difference is that atl is able to fork type-checker and emitter to a separate process, which also speeds-up some development scenarios (e.g. react with react-hot-loader) So your webpack compilation will end earlier and you can explore compiled version in your browser while your files are typechecked.


#### ready for Redux Dev Tools


#### TSLINT
We're using tslint-react

#### CSS
##### POSTCSS
We're using 'postcss-cssnext', which supports nesting.