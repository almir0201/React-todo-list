import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import React from 'react';
import { ThemeProvider } from './components/context/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <TodoWrapper />
      </ThemeProvider>
    </div>
  );
}

export default App;
