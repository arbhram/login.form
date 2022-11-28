import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Loginform from './Loginform';
import Project from './Project';
import { isContentEditable } from '@testing-library/user-event/dist/utils';

function App() {
  const [Value,setValue]=useState('')
    const Submit = () => {
    alert('ok');
    console.log(Value);
    }
return (
  <>
   <Loginform/>
  </>
  );
  }

export default App;

