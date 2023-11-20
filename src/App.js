import './App.css';

import { useState } from 'react';
import InputField from './components/inputField/InputField';

function App() {
  const [email, setEmail] = useState('')
  return (
    <InputField value={email} setValue={v => setEmail(v)} placeholder={"Email"} />
  );
}

export default App;
