import React from 'react';
import PropsComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <ChildComponent
          boolValue= {true}
          numValue= {1}
          arrayValue= {[1, 2, 3]}
          objValue= {JSON.stringify({name : "제목", age : 30})}
          nodeValue= {<h1>노드</h1>}
          funcValue= {()=> {console.log('메시지')}}
        />
      </div>
    );
  }
}

export default App;
