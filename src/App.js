import React from 'react';
import PropsComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import ChildComponent2 from './03/ChildComponent2';
import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';
import StateExam from './03/StateExam';
import ForceUpdateExample from './03/ForceUpdateExample';
import Count from './03/Count';
import LifecycleExample from './03/LifecycleExample';
import NewCounter from './03/NewCounter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count : 0};
    this.resetCount = this.resetCount.bind(this);

  }
  resetCount() {
    this.setState(({count}) => ({count: count + 10}));
  }

  render() {
    return (
      <div className="body">
        <div><Count count={this.state.count}/></div>
        <div><NewCounter count={this.state.count}/></div>
        <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
      </div> 

    );
  }
}

export default App;
