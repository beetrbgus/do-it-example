import React from 'react';
import PropsComponent from './03/PropsComponent';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <PropsComponent name="message"/>
      </div>
    );
  }
}

export default App;
