import * as React from "react";
import { connect } from "react-redux";
import * as Redux from "redux";
import { incrementCounter, resetCounter } from "../actions/index";
import { Store } from "../store";

const style = require("./style.css"); // tslint:disable-line

interface OwnProps {
  label: string;
}

interface ConnectedState {
  counter: { value: number };
}

interface ConnectedDispatch {
  increment: (n: number) => void;
  reset: () => void;
}

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<Store.All>): ConnectedDispatch => ({
  increment: (n: number) => {
    dispatch(incrementCounter(n));
  },
  reset:     () => {
    dispatch(resetCounter());
  },
});

/* props will be merged with ConnectedState and
   ConnectedDispatch when Redux connect() is used */
class CounterComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, {}> {

  onClickIncrement = () => {
    this.props.increment(1);
  }

  onClickReset = () => {
    this.props.reset();
  }

  render() {
    const { counter, label } = this.props;
    return (
        <div className={style.mainContainer}>
          <div className={style.logo} />
          <div className={style.businessArea}>
            <label>{label}</label>
            <pre>counter = {counter.value}</pre>
            <button className={style.clickMe} ref="increment" onClick={this.onClickIncrement}>click me!</button>
            <button className={style.reset} ref="reset" onClick={this.onClickReset}>reset!</button>
          </div>
        </div>

    );
  }
}

export const Counter: React.ComponentClass<OwnProps> =
                 connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
