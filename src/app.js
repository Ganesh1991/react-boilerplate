import React from "react";
import { hot } from "react-hot-loader";

const Warning = React.lazy(() => import("./warning"));

class App extends React.Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <h1>Hello Webpack World test!!!</h1>
        <h2 className={this.state.count > 10 ? "warning" : null}>
          Counter: {this.state.count}
        </h2>
        <br />
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          -
        </button>
        {this.state.count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}

export default hot(module)(App);
