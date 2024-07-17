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

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <LifecycleExample/>
      </div> 
    );
  }
}

export default App;
