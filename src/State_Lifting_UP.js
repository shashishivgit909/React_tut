//Lifting State Up:
// Instead of managing the temperature state within each child component,
// you can create a common parent component, often referred to as the "container" or "parent" component. This parent component will hold the temperature state and pass it down to the child components as props.


import React, { Component } from 'react';

class TemperatureCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: 0 };
  }

  handleTemperatureChange = (event) => {
    this.setState({ temperature: event.target.value });
  };

  render() {
    return (
      <div>
        <TemperatureInput
          temperature={this.state.temperature}
          onTemperatureChange={this.handleTemperatureChange}
        />
        <TemperatureDisplay temperature={this.state.temperature} />
      </div>
    );
  }
}

class TemperatureInput extends Component {
  render() {
    return (
      <input
        value={this.props.temperature}
        onChange={this.props.onTemperatureChange}
      />
    );
  }
}

class TemperatureDisplay extends Component {
  render() {
    return <p>Current Temperature: {this.props.temperature}</p>;
  }
}

export default TemperatureCalculator;