import React from 'react';
import PropsComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import ChildComponent2 from './03/ChildComponent2';
import DefaultPropsComponent from './03/DefaultPropsComponent';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <DefaultPropsComponent/>
      </div> 
    );
  }
}

export default App;
