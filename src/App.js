import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/Counter'
import Results from './components/Results';
// import UndoRedo from './components/UndoRedo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
        <Counter/>
        <Results/>
        {/* <UndoRedo/> */}
        </Provider>
  
      </header>
    </div>
  );
}

export default App;
