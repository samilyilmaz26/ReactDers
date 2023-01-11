import {useState} from 'react'
import Component1 from './components/Component1';
import {UserContext} from './context/context'
function App() {
  const [user , setUser] = useState("Jesse Hall");
  return (
   <UserContext.Provider value = {{user,setUser}}>
   <Component1 />
   </UserContext.Provider> 
  );
}

export default App;
