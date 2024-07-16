import React from 'react';
import PropsComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import ChildComponent2 from './03/ChildComponent2';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <ChildComponent2 objValue={{age: "20살"}}/>
      </div>
    );
  }
}

export default App;
