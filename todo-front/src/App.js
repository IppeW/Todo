import React, { Component } from 'react';
//import FirstComponent from './components/learning-exemples/FistComponent';
//import SecondComponents from './components/learning-exemples/SecondComponents';
//import ThirdComponents from './components/learning-exemples/ThirdComponents';
//import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';
import './App.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <TodoApp />

      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//         My Hello WorlD
//         <FirstComponent />
//         <SecondComponents />
//         <ThirdComponents />
//       </div>
//     );
//   }
// }


export default App;