import React from 'react';

class TodaysPlan extends React.Component {
  render() {
    const name = this.props.name;
    return <div className="message-container">놀러가고 싶다는 {name}</div>;
  }
}

export default TodaysPlan;
