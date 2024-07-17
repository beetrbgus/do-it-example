import React, { Component } from 'react';

class LifecycleExample extends Component {
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출');
    return {};
  }
  constructor(props) {
    super(props);
    // getDerivedStateFromProps를 사용하기 때문에 state 초깃값 설정
    this.state = {};
    console.log('constructor 실행');
  }

  componentDidMount() {
    console.log('componentDidMount 실행');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate 실행');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount 실행');
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate 실행');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate 실행');
    return;
  }

  render() {
    console.log('render 실행');
    return <div></div>;
  }
}

export default LifecycleExample;
