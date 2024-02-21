import * as React from 'react';
import PivkoBar from '../App/pivko_bar';
import MainPage from '../App/main_page';
import './App.css';

function App() {
  return (
   <>
      <PivkoBar/>
      <div className='App-header'>
        <MainPage/>
      </div>
   </>
  );
};

export default App;