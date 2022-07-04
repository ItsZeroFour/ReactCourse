//! Классы устарели, поэтому их лучше не использовать
import React from "react";

//! Имя должны совпадать с именем файла
class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // Убираем function т.к. мы работаем в классе
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  // Убираем function т.к. мы работаем в классе
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;
