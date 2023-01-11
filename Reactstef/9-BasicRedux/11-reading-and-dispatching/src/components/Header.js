import { useSelector, useDispatch } from 'react-redux';

 
import { authActions } from '../store/index';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const onLogout = () => {
    
    dispatch(authActions.logout());
  };

  return (
    <div>
      {
        isAuth && (
           
            <ul className="nav">

              <li className="nav-item">
                <a className="nav-link" href="/">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Categories</a>
              </li>
              <li className="nav-item">
                <a className='navlink' onClick={onLogout} href=" ">Logout</a>
              </li>
            </ul>
        )
      }
    </div>
    /*   <header className={classes.header}>
        <h1>Redux Auth</h1>
        {isAuth && (
          <nav>
            <ul>
              <li>
                <a href='/'>My Products</a>
              </li>
              <li>
                <a href='/'>My Sales</a>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </ul>
          </nav>
        )}
      </header> */
  );
};

export default Header;
