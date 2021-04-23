import React from 'react';
import './App.scss';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      active: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    return (
      this.state.active ? this.setState({ active: false }) : this.setState({ active: true })
    )
  }

  render() {
    return (
      <div className="App" >
        <ComponentA active={this.state.active} handleClick={this.handleClick} />
        <ComponentB active={this.state.active} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
