import { h, render, Component } from 'preact'

// Tell Babel to transform JSX into h() calls:
/** @jsx h */

class Counter extends Component {
  state = { count: 0 }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(prevState => ({ count: prevState.count + 1 })),
      200,
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return <div>10:{this.state.count}</div>
  }
}

export default Counter
