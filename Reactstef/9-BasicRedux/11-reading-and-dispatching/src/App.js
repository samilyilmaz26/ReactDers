import { Fragment } from 'react';
import { useSelector } from 'react-redux';

 
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Basket from './components/Basket';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Basket />
      <BrowserRouter>
    <Routes>
    
        
    </Routes>
  </BrowserRouter>
    </Fragment>
  );
}

export default App;
