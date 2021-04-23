import React from 'react';
import './App.scss';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      active: false,
      text: "State text"
    }

    this.handleClick = this.handleClick.bind(this)
    this.renderText = this.renderText.bind(this)
  }

  componentDidMount() {
    const activeState = JSON.parse(localStorage.getItem("active"))
    const textState = localStorage.getItem("text")

    this.setState({
      active: activeState,
      text: textState
    })
  }

  componentDidUpdate() {
    localStorage.setItem("active", this.state.active)
    localStorage.setItem("text", this.state.text)
  }

  handleClick() {
    return (
      this.state.active ? this.setState({ active: false }) : this.setState({ active: true })
    )
  }

  renderText(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div className="App" >
        <ComponentA active={this.state.active} handleClick={this.handleClick} text={this.state.text} renderText={this.renderText} />
        <ComponentB active={this.state.active} handleClick={this.handleClick} text={this.state.text} renderText={this.renderText} />
      </div>
    );
  }
}

export default App;
