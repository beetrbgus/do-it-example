import React from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends React.Component {
  render() {
    const name = this.props.name;
    return <div className="message-container">놀러가고 싶다는 {name}</div>;
  }
}

PropsComponent.propTypes = {
  name: PropTypes.string,
};

export default PropsComponent;
