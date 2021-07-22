import React from 'react';
//import colors from './colors';

class Square extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div
        style={{ backgroundColor: this.props.color }}
        className="square"
      ></div>
    );
  }
}

export default Square;
