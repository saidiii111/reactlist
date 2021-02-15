import React from 'react';
import './App.css';
import TodoItems from './components/TodoItems/TodoItems';


class App extends React.Component {
  state = {
    items: [
      { id: 1, name: 'Fayad', age: 31 },
      { id: 2, name: 'Rabee', age: 32 },
      { id: 3, name: 'Majed', age: 28 }
    ]
  }
  render() { 
    return ( 
      <div className="App">
      <header className="App-header">
          testing
             <TodoItems />
      </header>
    </div>
  );
   
  }
}
 
export default App;


