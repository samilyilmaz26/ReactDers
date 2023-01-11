import Component1 from "./components/Component1";
import {useState} from 'react'
function App() {
  const [user, setUser] = useState("Jesse Hall");
  return (
     <>
      <Component1 user = {user}/>
     </>
  );
}
export default App;
