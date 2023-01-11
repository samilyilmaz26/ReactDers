import { useDispatch } from 'react-redux';

 
import { authActions } from '../store/index';

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <main className='container' >
      <section>
        <form onSubmit={loginHandler}>
          <div  >
            <label htmlFor='email'>Email</label>
            <input className='form-control'  type='email' id='email' />
          </div>
          <div  >
            <label htmlFor='password'>Password</label>
            <input className='form-control' type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
