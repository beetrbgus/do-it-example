import React from 'react';
import PropsComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import ChildComponent2 from './03/ChildComponent2';
import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <ChildProperty>
          <div><span>자식 노드</span></div>
        </ChildProperty>
      </div> 
    );
  }
}

export default App;
