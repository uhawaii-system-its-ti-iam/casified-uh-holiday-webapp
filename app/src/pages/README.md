# What's in here?

In the 'pages' folder, we store our page executables. Pages are responsible for presenting a complete layout or view to the user. They typically correspond to different sections or features of the application. 

Pages often have their own layout and styling. Pages often consist of multiple components. A page can be seen as a composition of various components that work together to create a complete user interface.

# Notes

Take a look at the following page:

~~~
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleRestart = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div className="card__box">
            <NavBar
              totalCounters={
                this.state.counters.filter((c) => c.value > 0).length
              }
            />
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onRestart={this.handleRestart}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
~~~

Notice how components are imported at the top

~~~
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
~~~

...and rendered at the bottom

~~~
render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div className="card__box">
            <NavBar
              totalCounters={
                this.state.counters.filter((c) => c.value > 0).length
              }
            />
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onRestart={this.handleRestart}
            />
          </div>
        </main>
      </div>
    );
  }
~~~

