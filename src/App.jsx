import { useState } from 'react'
import './App.css'
import ComponentA from './componets/ComponentsA';
import ComponentB from './componets/ComponentsB';
import ComponentC from './componets/ComponentsC';


function App() {

  const [nombor, setNombor] = useState(10);

  return (
    <>
    <ComponentA nomborA={nombor}/>
    <ComponentB/>
    <ComponentC objekSaya={{
      nama: "Zulrahman",
      umur: 31,
    }}/>
    </>
  )
}

export default App
