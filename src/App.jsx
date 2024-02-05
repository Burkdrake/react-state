
import { useState } from 'react'
import './App.css'
import Profilecard from './component/Profilecard'
import Welcome from './component/welcome'
import Counter from './component/Counter';
import Githubusers from './component/Githubusers';
import Parent from './component/Parent.JSX';

const App = () => {
  const [show, setShow] = useState(false);

  // handle show button
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="{switchColor}">
     
      {show ? <Welcome /> : <Profilecard />}
      <button onClick={handleShow}>Toggle Show</button>
      <Counter/>
      <Githubusers />
      <Parent />
    </div>
  
  )
};
  
export default App
